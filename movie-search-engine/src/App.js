// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import MoviePopup from './MoviePopup';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b0e4a41d3083c5517d5205e4a42a0b57';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${title}`);
    const data = await response.json();
    setMovies(data.results);
  };

  const fetchMovieDetails = async (id) => {
    const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
    const data = await response.json();
    setSelectedMovie(data);
  };

  useEffect(() => {
    searchMovies('Baahubali');
  }, []);

  return (
    <div className="app">
      <h1>Telugu Movie Search Engine</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={() => fetchMovieDetails(movie.id)} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
      {selectedMovie && (
        <MoviePopup movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;
