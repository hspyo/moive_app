import React from "react";
import { IMAGE_BASE_URL } from "../../Config";
import MovieList from "../MovieList/MovieList";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

// 검색 결과 화면
export default function Search({ movie, reloadPage }) {
  const resetPage = () => {
    reloadPage(false);
  };
  return (
    <section className={styles.section}>
      {/* 뒤로가기 버튼 */}
      <button className={styles.reloadBtn} onClick={resetPage}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> 뒤로가기 
      </button>
      {/* 검색 결과 없을 경우 */}
      {!movie && <p className={styles.searchMsg}> 검색 결과가 없습니다. </p>}
      {/* 검색 결과 있을 경우 */}
      {movie && <p className={styles.searchResult}>검색 결과 {movie.length} </p>}
      {movie && (
        <div className={styles.container}>
          {movie.map((movie) => (
            <MovieList
              key={movie.id}
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
          ))}
        </div>
      )}
    </section>
  );
}
