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
        height: "750px",
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div className="overview"
          style={{
            position: "absolute",
            maxWidth: "600px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h1 style={{ color: "#fff" }}> {props.title} </h1>
          <p style={{ color: "#fff", fontSize: "1.3rem" }}> {props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeImage;
