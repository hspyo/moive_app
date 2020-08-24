import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={require("./imgs/logo.png")} alt="Logo"/>
      </div>
      <div className="nav__menu">
        <Link to="/playing">현재 상영작</Link>
        <Link to="/popular">인기</Link>
        <Link to="/upComing">개봉예정</Link>
        <Link to="/topRated">높은 평점</Link>
      </div>
    </div>
  );
}

export default Navigation;
