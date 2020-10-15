import React from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from ".././MainImage/MainImage";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieCasts from "./MovieCasts/MovieCasts";
import styles from "./MovieItem.module.css";
import useFetchItem from "../../hooks/useFetchItem";

// 영화 상세페이지
// App.js에서 movieId를 파라미터로 받아온다.
export default function MovieItem({ match: { params : { movieId } }}) {
  
  // Fetch 영화 정보 
  const movieInfo = useFetchItem(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);

  // Fetch 영화 출연진
  const casts = useFetchItem(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
  const castList = casts.cast;

  return (
    <section className={styles.movieItem}>
      {/* 영화 메인 포스터 */}
      {!movieInfo && <p>Loading...</p>}
      {movieInfo.backdrop_path && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${movieInfo.backdrop_path}`}
          title={movieInfo.original_title}
          text={movieInfo.overview}
        />
      )}
      {/* 영화 정보 */}
      <MovieInfo movie={movieInfo} />
      {/* 영화배우 리스트 */}
      <div className={styles.castContainer}>
        <h1 className={styles.castTitle}>Casts</h1>
        <div className={styles.casts}>
          {!castList && <p>Loading...</p>}
          {castList &&
            castList.map((cast) => (
              <MovieCasts
                key={cast.id}
                image={
                  cast.profile_path
                    ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                    : null
                }
                castName={cast.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
