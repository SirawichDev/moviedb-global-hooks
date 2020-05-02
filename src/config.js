const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query= `;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w500";
module.exports = {
  API_KEY,
  API_URL,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
