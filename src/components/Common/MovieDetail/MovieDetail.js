import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../../Config";
import HomeImage from "../../Home/HomeImage";
import MovieInfo from "../MovieInfo/MovieInfo";
import MovieCasts from "../MovieCasts/MovieCasts";
import "./MovieDetail.css";

function MovieDetail(props) {
  let movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [CastToggle, setCastToggle] = useState(false);

  useEffect(() => {
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });

    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCasts([...Casts, ...response.cast]);
      });
  }, []);

  const CastsToggleBtn = () => {
    setCastToggle(!CastToggle);
  };
  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Header */}
      {Movie.backdrop_path && ( 
        <HomeImage
          image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
          title={Movie.original_title}
          text={Movie.overview}
        />
      )}
      {/* Movie Info */}
      <MovieInfo movie={Movie} />

      <div className="cast__toggle__btn">
        <button onClick={CastsToggleBtn}> View Casts </button>
      </div>

      {/* Actor  */}
      {CastToggle && (
        <section className="cast_box">
          <h1>Casts</h1>
          <div className="casts">
            {Casts &&
              Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <MovieCasts
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : "null"
                    }
                    characterName={cast.name}
                  />
                </React.Fragment>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default MovieDetail;
