import { API_KEY, API_URL } from '../Config';

class SearchMovie {
  constructor(key) {
    this.ket = key;
  }

  async search(query) {
    const response = await fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
    const json = await response.json();
    return json.results;
  }
}

export default SearchMovie;