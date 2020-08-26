import React from "react";
import "./Popular.css";
import { Link } from "react-router-dom";

function PopularDetail(props) {
  console.log(`${props.movieId}`);
  return (
    <div className="movie">
      
      <img src={props.image} alt={props.movieName} />
      

      <div className="movie__info">
        <a>{props.movieName}</a>
        <h5>release {props.releaseDate}</h5>
        <Link to={`/movie/${props.movieId}`}>Detail</Link>
        <h4>Overview</h4>
        <p>
          {props.Overview.slice(0, 180)}
          <b> . . . </b>
        </p>
      </div>
    </div>
  );
}

export default PopularDetail;
