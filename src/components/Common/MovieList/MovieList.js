import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";

function MovieList(props) {
  if (props.index === 0) {
    return (
        <div className="movie movie__top1">
          <span>TOP{props.index + 1}</span>
          <img src={props.image} alt={props.movieName} />
          <div className="movie__info">
            <p>{props.movieName}</p>
            <h5>{`${props.releaseDate}`}</h5>
            <Link to={`/movie/${props.movieId}`}>Detail</Link>
          </div>
        </div>
    );
  } else if (props.nowplaying) {
    return (
      <div className="movie">
        <img src={props.image} alt={props.movieName} />
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
          <Link to={`/movie/${props.movieId}`}>Detail</Link>
        </div>
      </div>
    );
  } else if (props.upcoming) {
    return (
      <div className="movie">
        <img src={props.image} alt={props.movieName} />
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
          <Link to={`/movie/${props.movieId}`}>Detail</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="movie">
        <img src={props.image} alt={props.movieName} />
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
          <Link to={`/movie/${props.movieId}`}>Detail</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
