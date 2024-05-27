import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./context";
const Singlepage = () => {
  const { id } = useParams();     // Retrieve movie ID from URL parameters
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState("");   // State to store movie details
  
  // Function to fetch detailed movie data from API
  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data);      // Update state with movie details
      }
      // else {
      //   // alert("No movies found");
      //   setIsError({
      //     show: true,
      //     msg: data.error,
      //   });
      // }
    } catch (error) {
      console.log(error);
    }
  };


  // Fetch movie details when component mounts or ID changes
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 200);
    return () => clearTimeout(timerOut);
  });

  // useEffect(() => {
  //   getMovies(`${API_URL}&i=${id}`);
  // });


  // Render loading message or movie details
  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {/* <div>Our single page {id}</div> */}
      {/* <div id="movie-name">FILMEASE</div> */}
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img className="movie-card img" src={movies.Poster} alt="" />
          </figure>

          <div className="card-text">
            <p>Movie: <i>{movies.Title} </i></p>
            <p>Genre: <i> {movies.Genre} </i></p>
            <p>Rating: <i> {movies.imdbRating} / 10 | Runtime: {movies.Runtime}</i></p>
            <p>Country: <i>{movies.Country} </i></p>
            <p>Language: <i>{movies.Language}</i></p>
            <p>Released: <i>{movies.Released}</i></p>
            <p>Actors : <i>{movies.Actors}</i></p>
            <p>Director : <i>{movies.Director}</i></p>
            <p>Writer : <i>{movies.Writer}</i></p>
            <p>Summary: <i>{movies.Plot}</i></p>

            <NavLink to="/">Back To Home</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Singlepage;
