import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../common/MainImage/MainImage";
import "./Home.css";

// 메인페이지
export default function Home() {
  const [HomeMovieImage, setHomeMovieImage] = useState(null);
  
  // 인기영화 순위 API를 호출하여 실시간 1위 영화를 표시한다. 
  // 배열안에 0번 인덱스를 상태값으로 설정한다.
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
      {/* 메인이미지가 상태값으로 설정되었는지 확인 후 MainImage 컴포넌트를 렌더링한다. */}
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
