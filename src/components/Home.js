import React, { useContext } from "react";
import { MoiveContext } from "../App";
import Header from "./elements/Header";
import HeaderImage from "./elements/HeaderImage";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { GlobalStyle } from "./styles/GlobalStyle";
import Spinner from "./elements/Spinner";
const Home = () => {
  const movieContext = useContext(MoiveContext);
  const { headerImage } = movieContext.movieState;
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
      <Spinner/>
      <GlobalStyle/>
    </>
  );
};

export default Home;
