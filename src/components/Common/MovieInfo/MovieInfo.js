import React from "react";
import "./MovieInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function MovieInfo(props) {
  const { movie } = props; 
  return (
    <div className="tableBox">
      <div className="info__header" colSpan="4">
        Overview
      </div>
      <table>
        <tbody colSpan="4">
          <tr>
            <td className="info">Title</td>
            <td className="info__value">{movie.title}</td>
            <td className="info">Release</td>
            <td className="info__value">{movie.release_date}</td>
          </tr>
          <tr>
            <td className="info">Vote</td>
            <td className="info__value">{movie.vote_count}</td>
            <td className="info">Language</td>
            <td className="info__value">{movie.original_language}</td>
          </tr>
          <tr>
            <td className="info"> Runtime</td>
            <td className="info__value">{movie.runtime}</td>
            <td className="info">Status</td>
            <td className="info__value">{movie.status}</td>
          </tr>
          <tr>
            <td className="info">Ratings</td>
            <td className="info__value"> ⭐️ {movie.vote_average} </td>
            <td className="info">Popularity</td>
            <td className="info__value">{movie.popularity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MovieInfo;
