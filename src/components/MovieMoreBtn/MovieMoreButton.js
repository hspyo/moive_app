import React from 'react';

export default function MovieMoreBtn({showMoreMovies, currentPage}) {

  return (
      <div className="movie__more__btn">
        <button onClick={() => showMoreMovies(currentPage)}> View More </button>
      </div>
  )
}