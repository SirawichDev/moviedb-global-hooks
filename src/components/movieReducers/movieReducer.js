export const MoviesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        movies:
          action.isLoadMore !== -1
            ? [...state.movies, ...action.payload.results]
            : [...action.payload.results],
        headerImage: action.payload.results[0] || state.headerImage ,
        loading: false,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
      };

    case "FETCH_ERR":
      return { loading: false, error: action.error };

    default:
      return state;
  }
};
