import React from "react";
import "./MovieCasts.css";

// 출연 배우 리스트
// MovieItem으로부터 {image, castName}을 전달받는다.
export default function MovieCasts({ image, castName }) {
  // 이미지가 있을 경우 전달받은 배우 이미지를 보여준다.
  if (image !== "null") {
    return (
      <div className="cast">
        <img src={image} alt="출연 배우 사진" />
        <p> {castName} </p>
      </div>
    );
  } else { // 이미지가 없을 경우 대체이미지를 사용한다.
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
