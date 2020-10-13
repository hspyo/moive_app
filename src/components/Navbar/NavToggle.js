
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// 네비게이션 토글바
export default function NavToggle() {
  
  const [ToggleButton, setToggleButton] = useState(false);

  const openToggle = () => {
    setToggleButton(!ToggleButton);
  };

  return (
    <div className="nav__menu__toggle">
      <div className="nav__toggle__box">
        <button className="nav__toggle__btn" onClick={openToggle}> 
          <FontAwesomeIcon icon={ faBars }/> 
        </button>
      </div>
      {/* 토글이 열렸을 경우 */}
    {ToggleButton && 
      <div className="nav__menu__open">
        <Link to="/playing" onClick={openToggle} className="nav__menu__item">현재 상영작</Link>
        <Link to="/popular" onClick={openToggle} className="nav__menu__item">인기</Link>
        <Link to="/topRated" onClick={openToggle} className="nav__menu__item">높은 평점</Link>
        <Link to="/upComing" onClick={openToggle} className="nav__menu__item">개봉예정</Link>
      </div> }
    </div>
 );
}