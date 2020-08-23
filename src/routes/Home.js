import React from "react";
import axios from "axios";
import Movie from '../components/Movie';
import "./Home.css";
console.log("home");

class Home extends React.Component {
  state = { 
    isLoading: true,
    movies: [console.log("appState")],
  };
  
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); 
    console.log("appgetMovies");
  };

  componentDidMount() {
    this.getMovies();
    console.log("appcomponentDidMount");
  }
  render() {
    console.log("appRender");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              runtime={movie.runtime}
              />
              ))}
          </div>
        )}
      </section>
    );        
  }
}

export default Home;
