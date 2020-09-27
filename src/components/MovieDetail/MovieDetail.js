import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../common/MainImage/MainImage";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieCasts from "./MovieCasts/MovieCasts";
import "./MovieDetail.css";

// 영화 상세페이지
export default function MovieDetail(props) {
  // App.js에서 route하여 movieId를 파라미터로 받아온다.
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);

  // movieId에 해당하는 영화 데이터를 받기위해 API를 호출한다.
  useEffect(() => {
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      });
  }, []);
  
  // 출연 배우들 목록을 받기 위해 API를 호출한다.
  const [Casts, setCasts] = useState([]);
  useEffect(() => {
    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCasts(response.cast);
      });
  }, []);
  
  // 배우 리스트 토글버튼을 위한 상태값 및 함수
  const [CastToggle, setCastToggle] = useState(false);
  const CastsToggleBtn = () => {
    setCastToggle(!CastToggle);
  };
  
  return (
    <div id="movie__detail">
      {/* 영화 메인 포스터 */}
      {Movie.backdrop_path && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      )}

      {/* 영화 정보 */}
      <MovieInfo movie={Movie} />
      
      {/* 배우 리스트 토글버튼 */}
      <div className="cast__toggle__btn">
        <button onClick={CastsToggleBtn}> View Casts </button>
      </div>

      {/* 배우 리스트 */}
      {CastToggle && (
        <section className="cast_box">
          <h1>Casts</h1>
          <div className="casts">
            {/* map을 사용하여 배우 리스트를 반환한다. */}
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <MovieCasts
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : "null"
                    }
                    castName={cast.name}
                  />
                </React.Fragment>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
