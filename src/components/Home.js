import React, { useContext, useState } from "react";
import { MoiveContext } from "../App";
import Header from "./elements/Header";
import Spinner from "./elements/Spinner";
import Flex from "./elements/Flex";
import LoadMore from "./elements/LoadMore";
import MovieThumb from "./elements/MovieThumb";
import HeaderImage from "./elements/HeaderImage";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { GlobalStyle } from "./styles/GlobalStyle";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movieContext = useContext(MoiveContext);
  const {
    headerImage,
    loading,
    currentPage,
    totalPages,
  } = movieContext.movieState;
  console.log(movieContext);
  if (movieContext.error) return <div>Something Wrong...</div>;
  if (!headerImage) return <Spinner />;
  return (
    <>
      <Header />
      <HeaderImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${headerImage.backdrop_path}`}
        title={headerImage.original_title}
        text={headerImage.overview}
      />
      <Flex header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movieContext.movieState.movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : "No Image Found"
            }
            movieId={movie.id}
            movieName={movie.original_title}
            clickable
          />
        ))}
      </Flex>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMore text="Load more" callback={movieContext.loadmoreFn} />
      )}
      <GlobalStyle />
    </>
  );
};

export default Home;
