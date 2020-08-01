import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      const {
        state: { title, year, summary, poster, genres },
      } = location;
      return (
        <div className="MovieContainer">
          <div className="mainThings">
            <div>
              <img src={poster} alt={title} />
            </div>
            <div className="component">
              <h3 className="movie_year">{year}</h3>
              <h1 className="movie_title">{title}</h1>
              <ol className="genre_list">
                {genres.map((genre) => {
                  return <li className="genre">{genre}</li>;
                })}
              </ol>
            </div>
          </div>
          <p className="movie_summary">{summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
