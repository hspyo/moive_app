import React from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import useFetchList from "../../hooks/useFetchList";
import MainImage from ".././MainImage/MainImage";
import styles from "./MovieHome.module.css";

// 메인페이지
export default function MovieHome() {
  
  // 인기영화 목록을 받아온다.
  const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  const [topMovie, loading] = useFetchList(url);
  
  return (
    <section className={styles.movieHome}>
      {/* 실시간 1위 영화 (인기영화 리스트 중 0번째 배열) */}
      {loading && <p>Loading...</p>}
      {!loading && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${topMovie[0].backdrop_path}`}
          title={topMovie[0].original_title}
          text={topMovie[0].overview}
        />
      )}
      {!loading && (
        <div className={styles.movieDetail}>
          <p className={styles.movieDesc}>실시간 1위 영화 ⬆</p>
        </div>
      )}
    </section>
  );
}
