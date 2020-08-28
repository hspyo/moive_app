import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";

function MovieList(props) {
  console.log(`${props.movieId}`);
  if (props.index === 0) {
    return (
      <div className="movie">
        <Link to={`/movie/${props.movieId}`}>TOP{props.index+1}</Link>
        <img src={props.image} alt={props.movieName} />
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
          <Link to={`/movie/${props.movieId}`}>Detail</Link>
        </div>
      </div>
    );
  }
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

export default MovieList;
