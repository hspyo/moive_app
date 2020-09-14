import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MovieList from "../components/Common/MovieList/MovieList";
import "./Container.css";

function NowPlaying() {
  const [Movies, setMovies] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies([...Movies, ...response.results]);
        setCurrentPage(response.page);
      });
  };
  const moreBtn = () => {
    const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };
  
  return (
    <section className="container">
      <div className="section__title">현재 상영작</div>
      <div className="movie__container">
        {Movies &&
          Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <MovieList
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieName={movie.title}
                movieReleaseDate={movie.release_date}
                movieLanguage={movie.original_language}
                movieRate={movie.vote_average}
              />
            </React.Fragment>
          ))}
      </div>
      <div className="moreBtn">
        <button onClick={moreBtn}> View More </button>
      </div>
    </section>
  );
}

export default NowPlaying;
