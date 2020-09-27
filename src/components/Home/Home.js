import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../common/MainImage/MainImage";
import "./Home.css";

export default function Home() {
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
    <section className="home">
      {/* Main Image */}
      {HomeMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${HomeMovieImage.backdrop_path}`}
          title={HomeMovieImage.original_title}
          text={HomeMovieImage.overview}
        />
      )}
      <div className="home__description" >
        <h1>실시간 1위 영화 ⬆</h1>
      </div>
    </section>
  );
}
