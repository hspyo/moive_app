import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
console.log("movie");

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />{" "}
      {/* title은 이미지에 hover시 제목 나타냄 */}
      <div className="movie__data">
        <h3 className="movie__data">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0,180)}...</p>
      </div>
      <div>{console.log("movieRender ")}</div>
    </div>
  );
}

Movie.propsTypes = {
  justCheck: console.log("propsType"),
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
