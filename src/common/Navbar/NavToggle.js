
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// 네비게이션 토글바
export default function NavToggle() {
  
  const [ToggleOpen, setToggleOpen] = useState(false);

  const ToggleBtn = () => {
    setToggleOpen(!ToggleOpen);
  };

  return (
    <div className="nav__menu__toggle">
      <div className="nav__toggle__box">
        <button className="nav__toggle__btn" onClick={ToggleBtn}> 
          <FontAwesomeIcon icon={ faBars }/> 
        </button>
      </div>
      {/* 토글이 열렸을 경우 */}
    {ToggleOpen && 
      <div className="nav__menu__open">
        <Link to="/playing" onClick={ToggleBtn} className="nav__menu__item">현재 상영작</Link>
        <Link to="/popular" onClick={ToggleBtn} className="nav__menu__item">인기</Link>
        <Link to="/topRated" onClick={ToggleBtn} className="nav__menu__item">높은 평점</Link>
        <Link to="/upComing" onClick={ToggleBtn} className="nav__menu__item">개봉예정</Link>
      </div> }
    </div>
 );
}