import React from "react";
import styles from "./MovieInfo.module.css";

// 영화 정보 컴포넌트
// MovieItem으로부터 영화정보 {movie}을 전달받는다.
export default function MovieInfo({ movie }) {
  return (
    <div className={styles.movieInfo}>
      <div className={styles.header} colSpan="4">
        Overview
      </div>
      {/* 영화 제목, 개봉일자, 투표수, 랭귀지, 런타임, 개봉상태, 평점, 인기도*/}
      <table className={styles.table}>
        <tbody colSpan="4">
          <tr className={styles.tr}>
            <td className={styles.info}>Title</td>
            <td className={styles.value}>{movie.title}</td>
            <td className={styles.info}>Release</td>
            <td className={styles.value}>{movie.release_date}</td>
          </tr>
          <tr>
            <td className={styles.info}>Vote</td>
            <td className={styles.value}>{movie.vote_count}</td>
            <td className={styles.info}>Language</td>
            <td className={styles.value}>{movie.original_language}</td>
          </tr>
          <tr>
            <td className={styles.info}> Runtime</td>
            <td className={styles.value}>{movie.runtime}</td>
            <td className={styles.info}>Status</td>
            <td className={styles.value}>{movie.status}</td>
          </tr>
          <tr>
            <td className={styles.info}>Ratings</td>
            <td className={styles.value}> <span role="img" aria-label="star">⭐️</span> {movie.vote_average} </td>
            <td className={styles.info}>Popularity</td>
            <td className={styles.value}>{movie.popularity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
