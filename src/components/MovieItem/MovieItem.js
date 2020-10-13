import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from ".././MainImage/MainImage";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieCasts from "./MovieCasts/MovieCasts";
import "./MovieItem.css";

// 영화 상세페이지
export default function MovieItem(props) {
  // App.js에서 movieId를 파라미터로 받아온다.
  let movieId = props.match.params.movieId;

  // movieId에 해당하는 영화 API 호출
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    let movieItem = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    fetch(movieItem)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      });
  }, [movieId]); // movieId가 변경시 영화 정보를 새로 받아와야 함으로 의존성 배열에 추가한다.

  // 영화 배우 리스트 API를 호출
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    let moviecasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    fetch(moviecasts)
      .then((response) => response.json())
      .then((response) => {
        setCasts(response.cast);
      });
  }, [movieId]); // movieId가 변경시 배우 정보를 새로 받아와야 함으로 의존성 배열에 추가한다.

  // 영화 배우 리스트 토글 함수
  const [castToggle, setCastToggle] = useState(false);
  const toggleCastBtn = () => {
    setCastToggle(!castToggle);
  };

  return (
    <div id="movie__detail">
      {/* 영화 메인 포스터 */}
      {movie.backdrop_path && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
        />
      )}

      {/* 영화 정보 */}
      <MovieInfo movie={movie} />

      {/* 영화배우 리스트 토글버튼 */}
      <div className="cast__toggle__btn">
        <button onClick={toggleCastBtn}> View Casts </button>
      </div>

      {/* 영화배우 리스트 */}
      {castToggle && (
        <section className="cast_box">
          <h1>Casts</h1>
          <div className="casts">
            {casts &&
              casts.map((cast) => (
                <MovieCasts
                  key={cast.id}
                  image={
                    cast.profile_path
                      ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                      : "null"
                  }
                  castName={cast.name}
                />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
