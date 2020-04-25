import React, { useReducer, createContext } from "react";
import {
  movieReducer,
  initState,
  addMovieAction,
} from "./components/movieReducers/movieReducer";

import { useLogger } from "./utils/logger";

const MoviesContext = createContext(null);
export function MovieProvider({ children }) {
  const [movieState, dispatch] = useReducer(useLogger(movieReducer), initState);
  const actions = {
    add(movies) {
      dispatch(addMovieAction(movies));
    },
  };
  return (
    <MoviesContext.Provider value={{ movieState, actions }}>
      {children}
    </MoviesContext.Provider>
  );
}
export const MoviesCusumer = MoviesContext.Consumer;

export default MoviesContext;
