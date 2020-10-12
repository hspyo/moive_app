import React from "react";
import "./MainImage.css";

// 메인 이미지
export default function MainImage({ image, title, text }) {
  // Home 또는 MovieDetail로 부터 영화 포스터, 제목, 설명 데이터들을 받아온다.
  return (
    // 영화 포스터
    <div
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%),
        url('${image}'), #1c1c1c`,
        height: "750px",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
      }}
    > 
    {/* 제목, 설명. 설명은 200글자까지로 축약한다. */}
        <div className="movie__description">
          <h1> {title} </h1>
          <p> {text.slice(0, 200)} ...</p>
        </div>
    </div>
  );
}
