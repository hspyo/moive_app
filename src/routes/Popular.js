import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MovieList from "../components/MovieList/MovieList";
import "./Container.css";

export default function Popular() {
  const [Movies, setMovies] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
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
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <section className="container">
      <h1 className="movie__section">인기작</h1>
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
      <div className="movie__more__btn">
        <button onClick={moreBtn}>View More</button>
      </div>
    </section>
  );
}
