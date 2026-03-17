import React from "react";
import MovieCard from "./MovieCard";
import movies from "../data/movies";
import "../styles/Movie.css";

const MovieList = () => {
  return (
    <div className="movie-container">
      {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;