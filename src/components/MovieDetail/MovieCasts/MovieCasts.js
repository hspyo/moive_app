import React from "react";
import "./MovieCasts.css";

// 출연 배우 리스트
export default function MovieCasts({ image, castName }) {
  // MovieDetail로 부터 배우 이미지와, 배우 이름 데이터들을 전달 받는다.
  // 이미지가 있을 경우 전달받은 배우 이미지를 보여준다.
  if (image !== "null") {
    return (
      <div className="cast">
        <img src={image} alt="출연 배우 사진" />
        <p> {castName} </p>
      </div>
    );
  } 
  // 이미지가 없을 경우 대체이미지를 사용한다.
  else {
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
