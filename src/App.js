import React, { useReducer, useEffect } from "react";
import Home from "./components/Home";
import { MoviesReducer } from "./components/movieReducers/movieReducer";
import { API_KEY, API_URL, SEARCH_BASE_URL ,POPULAR_BASE_URL} from "./config";

export const MoiveContext = React.createContext();
const initState = {
  movies: [{}],
  loading: true,
  currentPage: 0,
  headerImage: {},
  totalPages: 0,
  searchTerm: "",
  error: "",
};

function App() {
  const [movieState, dispatch] = useReducer(MoviesReducer, initState);
  const fetchMovies = async (endpoint) => {
    try {
      const result = await (await fetch(endpoint)).json();
      dispatch({
        type: "FETCH_SUCCESS",
        payload: result,
        isLoadMore: endpoint.search("page"),
      });
    } catch (error) {
      dispatch({ type: "FETCH_ERR", error: error });
    }
  };

  const loadMore = () => {
    const { currentPage, searchTerm } = movieState;

    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };
  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);
  return (
    <MoiveContext.Provider
      value={{
        movieState: movieState,
        movieDispath: dispatch,
        loadmoreFn: loadMore,
      }}
    >
      <Home />
    </MoiveContext.Provider>
  );
}

export default App;
