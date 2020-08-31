import React from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";

function MovieList(props) {
  console.log(props);
  // Now Playing Movies
  if (props.nowplaying) {
    return (
      <div className="movie">
        <Link to={`/movie/${props.movieId}`}>
          <img src={props.image} alt={props.movieName} />
        </Link>
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
        </div>
      </div>
    );
  }
  // Popular Movies
  else if (props.popular) {
    if(props.index) {
      return (
        <div className="movie" >
        <Link to={`/movie/${props.movieId}`}>
          <img src={props.image} alt={props.movieName} />
        </Link>
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
        </div>
      </div>
        );
    } else {
      return (
        <div className="movie movie__top1" >
        <span> TOP{props.index + 1}</span>
        <Link to={`/movie/${props.movieId}`}>
          <img src={props.image} alt={props.movieName} />
        </Link>
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>{`${props.releaseDate}`}</h5>
        </div>
      </div>
      );
    }
  
    }
    
  // Upcoming Movies
  else if (props.upcoming) {
    return (
      <div className="movie">
        <Link to={`/movie/${props.movieId}`}>
          <img src={props.image} alt={props.movieName} />
        </Link>
        <div className="movie__info">
          <p>{props.movieName}</p>
          <h5>Release Date 🕔</h5>
          <h5>{`${props.releaseDate}`}</h5>
        </div>
      </div>
    );
  }
  // Top Rated Movies
  else {
    const rate = props.movieRate;
    return (
      <div className="movie">
        <Link to={`/movie/${props.movieId}`}>
          <img src={props.image} alt={props.movieName} />
        </Link>
      
        <div className="movie__info">
          <p>{props.movieName}</p>
          {rate > 9.5 && <h5>🌕🌕🌕🌕🌕<br/>{rate} / 10</h5>}
          {rate >= 8.5 && rate < 9.5 && <h5>🌕🌕🌕🌕🌗<br/>{rate} / 10</h5>}
          {rate >= 8 && rate < 8.5 && <h5>🌕🌕🌕🌕🌑<br/>{rate} / 10</h5>}
          {rate >= 7 && rate < 8 && <h5>🌕🌕🌕🌗🌑<br/>{rate} / 10</h5>}
          {rate >= 5 && rate < 7 && <h5>🌕🌕🌕🌑🌑<br/>{rate} / 10</h5>}
          {rate >= 4 && rate < 5 && <h5>🌕🌕🌗🌑🌑<br/>{rate} / 10</h5>}
          {rate >= 3 && rate < 4 && <h5>🌕🌕🌑🌑🌑<br/>{rate} / 10</h5>}
          {rate >= 2 && rate < 3 && <h5>🌕🌗🌑🌑🌑<br/>{rate} / 10</h5>}
          {rate >= 1 && rate < 2 && <h5>🌕🌑🌑🌑🌑<br/>{rate} / 10</h5>}
          {rate < 1 && <h4>🌗🌑🌑🌑🌑<br/>{rate} / 10</h4>}
          
        </div>
      </div>
    );
  }
}
export default MovieList;
