import React from "react";
import "./MovieInfo.css";

function MovieInfo(props) {
  const { movie } = props;
  console.log(props);
  return (
    <div className="tableBox">
      <table>
        <thead>
          <tr>
            <th colSpan="4">Overview</th>
          </tr>
        </thead>

        <tbody colSpan="4">
          <tr className="rowTop">
            <td>Title</td>
            <td>Vote</td>
            <td>Release</td>
            <td>Language</td>
          </tr>
          <tr className="rowBottom">
            <td>{movie.title}</td>
            <td>{movie.vote_count}</td>
            <td>{movie.release_date}</td>
            <td>{movie.original_language}</td>
          </tr>
          <tr className="rowTop">
            <td>Runtime</td>
            <td>Ratings</td>
            <td>Status</td>
            <td>Popularity</td>
          </tr>
          <tr className="rowBottom">
            <td>{movie.runtime}</td>
            <td>{movie.vote_average}</td>
            <td>{movie.status}</td>
            <td>{movie.popularity}</td>
          </tr>
      
        </tbody>
      </table>
    </div>
  );
}

export default MovieInfo;
