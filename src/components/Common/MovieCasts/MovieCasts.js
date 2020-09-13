import React from "react";
import "./MovieCasts.css";

function MovieCasts(props) { 
  
  if(props.image !== "null") {
      return (
        <div className="cast">
          <img src={props.image} alt={props.characterName} />
          <p>{props.characterName} </p>
        </div>
      );
    } else {
      return (
        <div  className="cast">
        <img src={require("./imgs/nophoto.jpg")} alt={props.characterName} />
        <p>{props.characterName} </p>
       </div>
        );
    }
  
}

export default MovieCasts;
