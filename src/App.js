import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// f4a738de

const API_URL = "https://www.omdbapi.com/?apikey=f4a738de";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>CineFlix</h1>

      <div className="search">
        <input
          placeholder="Search Your Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} onClick={() => {
            searchMovies(search);
        }} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard moviedata={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
