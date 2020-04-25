import React, { useReducer, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/elements/Header";
import { MovieProvider } from "./moviesApiContext";
import Home from "./components/Home";
import {
  API_KEY,
  API_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from "./config";
import { useLogger } from "./utils/logger";

export const MoiveContext = React.createContext();
const initState = {
  movies: {},
  loading: true,
  error: "",
};

const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, movies: action.payload, loading: false };

    case "FETCH_ERR":
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
function App() {
  const [movieState, dispatch] = useReducer(
    useLogger(MoviesReducer),
    initState
  );

  const fetchMovies = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json();
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dispatch({ type: "FETCH_ERR", error: error });
    }
  };
  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return (
    <MoiveContext.Provider value={{ movieState, movieDispath: dispatch }}>
      <div className="App">
        <Home />
      </div>
    </MoiveContext.Provider>
  );
}

export default App;
