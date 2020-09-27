import React from "react";
import "./MainImage.css";

export default function MainImage({ image, title, text }) {
  return (
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
      <div>
        <div className="movie__description">
          <h1> {title} </h1>
          <p> {text.slice(0, 200)} ...</p>
        </div>
      </div>
    </div>
  );
}
