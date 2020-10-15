import React from "react";
import styles from "./MovieList.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// 영화 리스트 컴포넌트
// NowPlaying, Popular, TopRated, Upcoming 라우터 컴포넌트로부터 속성값을 전달받는다.
export default function MovieList({ 
  image,
  movieId,
  movieRate,
  movieName,
  movieReleaseDate,
  movieLanguage}) {

  // 영화 평점을 위한 별아이콘 반환하는 함수.
  const createStar = (star) => {
      let stars = []
      for (let i=0; i<5; i++) {
        if(i <= star) {
          stars.push(<FontAwesomeIcon key={i} icon = { faStar } className={styles.starIcon}/>, " ")
        } else {
          stars.push(<FontAwesomeIcon key={i} icon = { farStar  } className={styles.starIcon}/>, " ")
        }
      }
      return stars;
    }
  
  // 영화포스터, 영화제목, 개봉일자, 랭귀지, 평점을 반환한다.
    return (
      <div className={styles.movieList}>
        <Link className={styles.movieLink}to={`/movie/${movieId}`}>
          <img className={styles.movieImg} src={image ? image : require("../MovieItem/imgs/no_poster.jpg")} alt="영화 포스터" />
        </Link>
        <div className={styles.movieDetail}>
          <h1 className={styles.movieName}>{movieName}</h1>
          <p className={styles.movieInfo}>
            {movieReleaseDate} <br/>
            Language : {movieLanguage}
          </p>
          {/* 영화 평점에 비례하여 별 개수를 반환한다. */}
          {movieRate >= 9.5 && movieRate <= 10 && <p className={movieRate}> <span className={styles.score}>{movieRate}</span> {createStar(5)}</p>}
          {movieRate >= 8 && movieRate < 9.5 && <p className={movieRate}><span className={styles.score}>{movieRate}</span> {createStar(4)}</p>}
          {movieRate >= 5 && movieRate < 8 && <p className={movieRate}><span className={styles.score}>{movieRate}</span> {createStar(3)}</p>}
          {movieRate >= 2 && movieRate < 5 && <p className={movieRate}><span className={styles.score}>{movieRate}</span> {createStar(2)}</p>}
          {movieRate >= 0 && movieRate < 2 && <p className={movieRate}><span className={styles.score}>{movieRate}</span> {createStar(1)}</p>}
        </div>
      </div>
    );
  }
