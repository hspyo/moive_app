import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function MovieList(props) {

    const movieRate = props.movieRate;
    const createStar = (star) => {
      let stars = []

      for (let i=0; i<5; i++) {
        if(i <= star) {
          stars.push(<FontAwesomeIcon icon = { faStar } className="ratingStars"/>, " ")
        } else {
          stars.push(<FontAwesomeIcon icon = { farStar  } className="ratingStars"/>, " ")
        }
      }

      return stars
    }

    return (
      <div className="movie">
        <Link to={`/movie/${props.movieId}`}>
          <img src={props.image} alt={props.movieName} />
        </Link>
        <div className="movie__info">
          <h1>{props.movieName}</h1>
          <h3>
            {props.movieReleaseDate} <br/>
            Language : {props.movieLanguage}
          </h3>
          {movieRate >= 9.5 && movieRate <= 10 && <p> <span>{movieRate}</span> {createStar(5)}</p>}
          {movieRate >= 8 && movieRate < 9.5 && <p><span>{movieRate}</span> {createStar(4)}</p>}
          {movieRate >= 5 && movieRate < 8 && <p><span>{movieRate}</span> {createStar(3)}</p>}
          {movieRate >= 2 && movieRate < 5 && <p><span>{movieRate}</span> {createStar(2)}</p>}
          {movieRate >= 0 && movieRate < 2 && <p><span>{movieRate}</span> {createStar(1)}</p>}
        </div>
      </div>
    );
  }
  

export default MovieList;
