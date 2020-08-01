import React from "react";
import axios from "axios";
import Movie from "../component/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    loading: true,
    movies: [],
  };

  loadMovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, loading: false });
  };

  componentDidMount() {
    this.loadMovie();
  }

  render() {
    const { loading, movies } = this.state;
    return (
      <section className="container">
        {loading ? (
          <div className="loader">
            <span className="loader_text">"Loading"</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movies) => {
              return (
                <Movie
                  key={movies.id}
                  title={movies.title}
                  year={movies.year}
                  poster={movies.medium_cover_image}
                  summary={movies.summary}
                  genres={movies.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default Home;
