import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './NavToggle.module.css';
// 네비게이션 토글바
export default function NavToggle() {
  
  const [ToggleButton, setToggleButton] = useState(false);

  const openToggle = () => {
    setToggleButton(!ToggleButton);
  };

  return (
    <div className={styles.menuToggle}>
      <div className={styles.toggleContainer}>
        <button className={styles.toggleButton} onClick={openToggle}> 
          <FontAwesomeIcon icon={ faBars }/> 
        </button>
      </div>
      {/* 토글이 열렸을 경우 */}
    {ToggleButton && 
      <div className={styles.menuOpen}>
        <Link to="/playing" onClick={openToggle} className={styles.item}>현재 상영작</Link>
        <Link to="/popular" onClick={openToggle} className={styles.item}>인기</Link>
        <Link to="/topRated" onClick={openToggle} className={styles.item}>높은 평점</Link>
        <Link to="/upComing" onClick={openToggle} className={styles.item}>개봉예정</Link>
      </div> }
    </div>
 );
}