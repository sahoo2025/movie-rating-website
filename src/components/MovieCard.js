import React from "react";
import RatingStars from "./RatingStars";
import "../styles/Movie.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">

      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p>{movie.genre}</p>

      <p>Year: {movie.year}</p>

      <RatingStars rating={movie.rating} />

    </div>
  );
};

export default MovieCard;