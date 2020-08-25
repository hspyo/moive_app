import React, {useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import PopularDetail from "./PopularDetail";

function Popular() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    
   fetch(endpoint)
   .then((response) => response.json())
   .then((response) => {
     console.log(response);

     setMovies([...Movies, ...response.results]); // ...전개연산자를 사용해야 배열을 업데이트
   });
  },[] );
  console.log(Movies);
  return (
    <div className="movies">
      {Movies && Movies.map((movie, index) => (
        <React.Fragment key={index}>
        <PopularDetail 
          image={movie.poster_path ?
          `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
          movieId={movie.id}
          movieName={movie.title}
          Overview={movie.overview}
          releaseDate={movie.release_date}
          popularity={movie.popularity}
          />
          </React.Fragment>
          
      ))}
  
    </div>
  );
    
}

export default Popular