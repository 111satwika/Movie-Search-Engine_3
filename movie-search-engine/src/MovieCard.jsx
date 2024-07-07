// src/MovieCard.jsx

import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie" onClick={onClick}>
      <div>
        <p>{movie.title}</p>
      </div>
      <div>
        <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/400"} alt={movie.title} />
      </div>
      <div>
        <span>{movie.release_date}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
