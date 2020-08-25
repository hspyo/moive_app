import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={require("./imgs/logo.png")} alt="Logo" />
        </Link>
      </div>
      <div className="nav__menu">
        <Link to="/playing">현재 상영작</Link>
        <Link to="/popular">인기</Link>
        <Link to="/upComing">개봉예정</Link>
        <Link to="/topRated">높은 평점</Link>
      </div>
      <div className="nav__menu__toggle">
        <Navbar bg="dark" variant="dark" expand='lg' >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/playing">현재 상영작</Link>
              <Link to="/popular">인기</Link>
              <Link to="/upComing">개봉예정</Link>
              <Link to="/topRated">높은 평점</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
