import React from "react";

function PopularDetail(props) {
  console.log(`${props.image}`);
  return (
    <div>
          <a href={`/movie/${props.movieId}`}>  
          <img src={props.image} alt={props.movieName}/>
          </a>
          <p> {props.movieName}</p>
    </div>
 
  );
}

export default PopularDetail
