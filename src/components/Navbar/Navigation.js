import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavToggle from './NavToggle/NavToggle';

// 네비게이션
export default function Navigation() {

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
      <img className={styles.logoImg} src={require("./imgs/logo.png")} alt="로고" />
        <Link className={styles.title} to="/">MovieTown</Link>
      </div>
      <div className={styles.menu}>
        <Link to="/playing" className={styles.item}>현재 상영작</Link>
        <Link to="/popular" className={styles.item}>인기순</Link>
        <Link to="/topRated" className={styles.item}>높은 평점순</Link>
        <Link to="/upComing" className={styles.item}>개봉예정</Link>
      </div>
      <NavToggle />
    </nav>
  );
}
