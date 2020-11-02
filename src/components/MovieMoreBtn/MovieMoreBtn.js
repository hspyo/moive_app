import React from 'react';
import styles from './MovieMoreBtn.module.css';

// 영화 리스트 다음페이지 보여주는 버튼
export default function MovieMoreBtn({showMoreMovies, currentPage}) {
  return (
      <div className={styles.movieMoreBtn}>
        <button className={styles.button} onClick={() => showMoreMovies(currentPage)}> View More </button>
      </div>
  )
}