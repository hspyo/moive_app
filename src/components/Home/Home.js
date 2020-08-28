import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import HomeImage from "./HomeImage";

function Home() {
  const [HomeMovieImage, setHomeMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        setHomeMovieImage(response.results[0]);
      });
  }, []);

  return (
    <div style={{ width: "100%", margin: "0"}}>
      {/* Main Image */}
      {HomeMovieImage && (
        <HomeImage
          image={`${IMAGE_BASE_URL}w1280${HomeMovieImage.backdrop_path}`}
          title={HomeMovieImage.original_title}
          text={HomeMovieImage.overview}
        />
      )}
      <div
        style={{
          width: "85%",
          margin: "1rem auto",
          textAlign: "center",
          fontFamily: "'Do Hyeon', sans-serif",
          fontSize: "1.2rem",
        }}
      >
        <h1>실시간 1위 영화 ⬆</h1>
        <hr />
      </div>
    </div>
  );
}

export default Home;
