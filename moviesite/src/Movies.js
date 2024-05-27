import React from "react";
import { useGlobalContext } from "./context";    //Custom hook to use global context
import { NavLink } from "react-router-dom";      //Component for navigation links

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();   //Destructuring movies and isLoading from global context

  if (isLoading) {
    return (
      <div>
        <div className="loading">Searching...</div>
      </div>
    );
  }

  // if (!movies || movies.length === 0) {
  //   return <div className="loading">Searching...</div>;
  // }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movies.map((currentmovie) => {
            const { imdbID, Title, Poster } = currentmovie;   //Destructuring properties of each movie
            const movieName = Title.substring(0, 20);         //Trimming movie title to 20 characrtes for display
            return (
               <NavLink to={`movie/${imdbID}`} key={imdbID}>   {/*//Link to movie details page */}
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length >= 20 ? `${movieName} ...` : movieName}     {/* Display truncated title with ellipsis if too long */}
                    </h2>
                    <img src={Poster} alt={imdbID} />         {/* Display movie poster */}
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
