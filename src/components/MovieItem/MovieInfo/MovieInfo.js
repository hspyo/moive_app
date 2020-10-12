import React from "react";
import "./MovieInfo.css";

// 영화 정보 컴포넌트
export default function MovieInfo({ movie }) {
// MovieDetail로 부터 영화 데이터들이 담긴 movie를 전달받는다.
  return (
    <div id="movie__info">
      <div className="info__header" colSpan="4">
        Overview
      </div>
      {/* 영화 제목, 개봉일자, 투표수, 랭귀지, 런타임, 개봉상태, 평점, 인기도*/}
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
            <td className="info__value"> <span role="img" aria-label="star">⭐️</span> {movie.vote_average} </td>
            <td className="info">Popularity</td>
            <td className="info__value">{movie.popularity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
