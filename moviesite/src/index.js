import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_DOMAIN;
const clientId= process.env.REACT_APP_CLIENTID;
root.render(
  <Auth0Provider
    // domain="vikki-al3rkumar.us.auth0.com"
    // clientId="0bLSILSWP2EmbYwntMy6Pf0bM1DOg1kX"
    domain= {domain}
    clientId ={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
    </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
