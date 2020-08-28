import React from "react";

function HomeImage(props) {
  
  return (
    <div 
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0)
 39%,rgba(0,0,0,0)
 41%,rgba(0,0,0,0.65)
 100%),
 url('${props.image}'), #1c1c1c`,
        height: "650px",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h1 style={{ color: "#fff" }}> {props.title} </h1>
          <p style={{ color: "#fff", fontSize: "1.2rem" }}> {props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeImage;
