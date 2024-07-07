
// src/MoviePopup.jsx

import React from 'react';
import './MoviePopup.css';

const MoviePopup = ({ movie, onClose }) => {
  const { title, overview, release_date, vote_average, credits } = movie;
  const director = credits.crew.find(person => person.job === 'Director');
  const actors = credits.cast.slice(0, 5).map(actor => actor.name).join(', ');

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{title}</h2>
        <p><strong>Release Date:</strong> <span>{release_date}</span></p>
        <p><strong>Rating:</strong> <span>{vote_average}</span></p>
        <p><strong>Director:</strong> <span>{director ? director.name : 'N/A'}</span></p>
        <p><strong>Actors:</strong> <span>{actors}</span></p>
        <p><strong>Overview:</strong> <span>{overview}</span></p>
      </div>
    </div>
  );
};

export default MoviePopup;
