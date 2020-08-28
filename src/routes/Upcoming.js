import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MovieList from "../components/Common/MovieList/MovieList";

function TopRated () {
  const [Movies, setMovies] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
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
    const endpoint = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
    fetchMovies(endpoint);
  }
  return (
    <section className="container">
    <div className="movies">
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
              releaseDate={movie.release_date}
              overview={movie.overview}
              index={index}
            />
          </React.Fragment>
        ))}
    </div>
    <div className="moreBtn">
      <button onClick={moreBtn}>See more movies</button>
    </div>
  </section>
  )

}

export default TopRated;

