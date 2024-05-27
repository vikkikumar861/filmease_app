import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  //DESTRUCTURE VALUES FROM THE GLOBAL CONTEXT
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <h2> Search your movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault}>
          <div>
            <input
              type="text"
              placeholder="search your movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
