import React from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import useFetch from '../../hooks/useFetch';
import MainImage from ".././MainImage/MainImage";
import styles from "./MovieHome.module.css";

// 메인페이지
export default function MovieHome() {
  
  // 인기영화 목록을 받아온다.
  const [topMovie, loading] = useFetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  
  return (
    <section className={styles.movieHome}>
      {/* 실시간 1위 영화 (인기영화 리스트 0번째 배열) */}
      {loading ? ( "Loading...") : (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${topMovie[0].backdrop_path}`}
          title={topMovie[0].original_title}
          text={topMovie[0].overview}
        />
      )}
      <div className={styles.movieDetail} >
        <p className={styles.movieDesc}>실시간 1위 영화 ⬆</p>
      </div>
    </section>
  );
}
