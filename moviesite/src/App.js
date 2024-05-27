import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Singlepage from "./Singlepage";
import Errorpage from "./Errorpage";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
const App = () => {
  const {logout, isAuthenticated, user, isLoading} = useAuth0();
  if (isLoading) {
    return <div className="login_loading">Loading ...</div>;
  }

  return (
    <>
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        <>  
          <h1 id="movie-name">FILMEASE <p className="logo"></p></h1>
          {/* <h1 id="movie-name"> <p className="logo"></p></h1> */}
          <p className="username">Welcome, {user.name}</p>
          <button className="logoutpage" onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Singlepage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </>
      )}
      
    </>
  );
  }
  
  function LoginPage() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="login_background">
    <h1 id="movie-name"> FILMEASE <p className="logo"></p></h1>
    <div className="login_border">
      <p className="login_user">Please log in to view the FilmEase Application.</p>
      <button className="loginpage" onClick={() => loginWithRedirect()}>Login</button>
    </div>
    </div>
  );
  }
  export default App;