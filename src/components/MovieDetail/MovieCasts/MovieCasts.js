import React from "react";
import "./MovieCasts.css";

export default function MovieCasts({ image, castName }) {
  if (image !== "null") {
    return (
      <div className="cast">
        <img src={image} alt="출연 배우 사진" />
        <p> {castName} </p>
      </div>
    );
  } else {
    return (
      <div className="cast">
        <img
          src={require("./imgs/nophoto.jpg")}
          alt="사진없는 출연 배우 대체 이미지"
        />
        <p> {castName} </p>
      </div>
    );
  }
}
