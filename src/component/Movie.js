import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ title, year, poster, summary, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { title, year, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title}></img>
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie_genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          {/* slice--> 첫 글자 ~ 마지막 글자 잘라내기 */}
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
