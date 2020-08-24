import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../Config";
import MainImage from "../components/MainImage";


function Home() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  // const [CurrentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        setMovies([response.results]);
        setMainMovieImage(response.results[0]);
      });
  }, []);

 return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Main Image */}
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}
        />
      )}
      <div style={{ width: "85%", margin: "1rem auto", textAlign: "center" }}>
        <h2>실시간 1위 영화 ⬆</h2>
        <hr />
      </div>
    </div>
  );
}

export default Home;