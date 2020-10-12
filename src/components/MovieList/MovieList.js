import React from "react";
import "./MovieList.css";
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
          stars.push(<FontAwesomeIcon key={i} icon = { faStar } className="ratingStars"/>, " ")
        } else {
          stars.push(<FontAwesomeIcon key={i} icon = { farStar  } className="ratingStars"/>, " ")
        }
      }
      return stars;
    }
  
  // 영화포스터, 영화제목, 개봉일자, 랭귀지, 평점을 반환한다.
    return (
      <div id="movie__list">
        <Link className="movie__list__link"to={`/movie/${movieId}`}>
          <img className="movie__list__img" src={image} alt="영화 포스터" />
        </Link>
        <div className="movie__list__info">
          <h1>{movieName}</h1>
          <h3>
            {movieReleaseDate} <br/>
            Language : {movieLanguage}
          </h3>
          {/* 영화 평점에 비례하여 별 개수를 반환한다. */}
          {movieRate >= 9.5 && movieRate <= 10 && <p> <span>{movieRate}</span> {createStar(5)}</p>}
          {movieRate >= 8 && movieRate < 9.5 && <p><span>{movieRate}</span> {createStar(4)}</p>}
          {movieRate >= 5 && movieRate < 8 && <p><span>{movieRate}</span> {createStar(3)}</p>}
          {movieRate >= 2 && movieRate < 5 && <p><span>{movieRate}</span> {createStar(2)}</p>}
          {movieRate >= 0 && movieRate < 2 && <p><span>{movieRate}</span> {createStar(1)}</p>}
        </div>
      </div>
    );
  }
