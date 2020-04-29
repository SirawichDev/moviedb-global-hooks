import React, { useContext, useState } from "react";
import { MoiveContext } from "../App";
import Header from "./elements/Header";
import Spinner from "./elements/Spinner";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import HeaderImage from "./elements/HeaderImage";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { GlobalStyle } from "./styles/GlobalStyle";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const movieContext = useContext(MoiveContext);
  const { headerImage } = movieContext.movieState;
  console.log(movieContext.movieState.movies.map((m) => m.poster_path));
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
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
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
      </Grid>
      <Spinner />
      <GlobalStyle />
    </>
  );
};

export default Home;
