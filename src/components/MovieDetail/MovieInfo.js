import React from 'react';


function MovieInfo(props) {
  const { movie } = props
  return (
    <div>
    {movie.title}
    {movie.release_date}
    {movie.revenue}
    {movie.runtime}
    {movie.vote_average}
    {movie.vote_count}
    {movie.status}
    {movie.popularrity}
    </div>
  )
}

export default MovieInfo