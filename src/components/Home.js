import React, { useContext } from "react";

import { MoiveContext } from "../App";
const Home = () => {
  const movieContext = useContext(MoiveContext);
  console.log(movieContext.movieState);
  return <h1>asds</h1>;
};

export default Home;
