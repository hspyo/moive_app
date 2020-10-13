import React from 'react';
import styles from './MovieMoreBtn.module.css';

export default function MovieMoreBtn({showMoreMovies, currentPage}) {
  return (
      <div className={styles.movieMoreBtn}>
        <button className={styles.button} onClick={() => showMoreMovies(currentPage)}> View More </button>
      </div>
  )
}