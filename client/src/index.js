import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";


/* Routes */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
document.getElementById("root")
);

