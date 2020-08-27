import React from "react";
import "./Popular.css";
import { Link } from "react-router-dom";

function PopularDetail(props) {
  console.log(`${props.movieId}`);
  
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

export default PopularDetail;
