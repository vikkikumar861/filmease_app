import React, { useContext, useEffect, useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();       //Create a Context for global state

//created a provider function
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);   // State to manage loading status
  const [movies, setMovies] = useState([]);       // State to manage list of movies
  const [isError, setIsError] = useState({ show: "false", msg: " " });
  const [query, setQuery] = useState("shaitaan");

  // Function to fetch movies from an API
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
        setMovies(data.Search);     // Update movies state with search results
      } else {
        // alert("No movies found");
        setIsError({
          show: true,
          msg: data.Error,
        });
        // setMovies([]); // Clear movies state if no results
      }
    } catch (error) {
      console.log(error);
      setIsError({
        Show: true,
        msg: "An Error Occurred while fetching Data",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 1000);
    return () => clearTimeout(timerOut);
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movies, setQuery }}>
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

//Creating Global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
