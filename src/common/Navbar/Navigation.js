import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import NavToggle from './NavToggle';

export default function Navigation() {

  return (
    <nav className="nav">
      <div className="nav__logo">
      <img src={require("./imgs/logo.png")} alt="로고" />
        <Link to="/">MovieTown</Link>
      </div>
      <div className="nav__menu">
        <Link to="/playing" className="nav__menu__item">현재 상영작</Link>
        <Link to="/popular" className="nav__menu__item">인기순</Link>
        <Link to="/topRated" className="nav__menu__item">높은 평점순</Link>
        <Link to="/upComing" className="nav__menu__item">개봉예정</Link>
      </div>
      <NavToggle className="nav__menu" />
    </nav>
  );
}
