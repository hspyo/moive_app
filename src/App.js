import React from "react";
import axios from "axios";
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = { 
    isLoading: true,
    movies: [console.log(4)],
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
    console.log(1);
  };

  componentDidMount() {
    this.getMovies();
    console.log(2);
  }
  render() {
    const { isLoading, movies } = this.state;
    console.log(3);
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                />
            ))}
          </div>
        )}
      </section>
    );        
  }
}

export default App;
