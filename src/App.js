import React, { useReducer, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import {
  API_KEY,
  API_URL,
} from "./config";

export const MoiveContext = React.createContext();
const initState = {
  movies: [{}],
  loading: true,
  headerImage: {},
  error: ""
};

const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, movies: action.payload,headerImage: action.headerImage , loading: false };

    case "FETCH_ERR":
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
function App() {
  const [movieState, dispatch] = useReducer(
    MoviesReducer,
    initState
  );
  const fetchMovies = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json();
      dispatch({ type: "FETCH_SUCCESS", payload: [...result.results],headerImage: result.results[0] });
    } catch (error) {
      dispatch({ type: "FETCH_ERR", error: error });
    }
  };
  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return (
    <MoiveContext.Provider value={{ movieState: movieState, movieDispath: dispatch }}>
        <Home />
    </MoiveContext.Provider>
  );
}

export default App;
