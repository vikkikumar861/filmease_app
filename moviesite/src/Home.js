import React from "react";
import Movies from "./Movies";
import Search from "./Search";
const Home = () => {
  return (
    <>
      {/* <h1 id="movie-name">FILMEASE</h1> */}
      <Search />
      <Movies />
    </>
  );
};

export default Home;
