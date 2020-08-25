import React from "react";
import "./Popular.css";

function PopularDetail(props) {
  console.log(`${props.image}`);
  return (
    <div className="movie">
      <img src={props.image} alt={props.movieName} />

      <div className="movie__info">
        <a>{props.movieName}</a>
        <h5>Release : {props.releaseDate}</h5>
        <h5>popularity : {props.popularity}</h5>
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
