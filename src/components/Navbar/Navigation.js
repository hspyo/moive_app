import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavToggle from './NavToggle/NavToggle';

// 네비게이션
export default function Navigation({ onSearch }) {

  const inputRef = useRef();
    
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    inputRef.current.value = "";
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (e) => {
    if(e.key === "Enter") {
      handleSearch();
    }
  }
  
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
      <img className={styles.logoImg} src={require("./imgs/logo.png")} alt="로고" />
        <Link className={styles.title} to="/" >MovieTown</Link>
      </div>
      <div className={styles.search}>
        <input className={styles.input}
          ref={inputRef} 
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress} 
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img className={styles.buttonImg} src={require("./imgs/search.png")} alt="검색버튼" />
        </button>
      </div>
      <div className={styles.menu}>
        <Link to="/playing"  className={styles.item}>현재상영</Link>
        <Link to="/popular"  className={styles.item}>인기 </Link>
        <Link to="/topRated" className={styles.item}>높은평점</Link>
        <Link to="/upComing" className={styles.item}>개봉예정</Link>
      </div>
      <NavToggle />
    </nav>
  );
}
