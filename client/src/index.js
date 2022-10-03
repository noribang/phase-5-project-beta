import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//     <App />,
//   document.getElementById("root")
// );

function Home() {
  return(
    <div>
      <h1>Home route!!!</h1>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Route path="/">
      <Home />
    </Route>
  </BrowserRouter>,
document.getElementById("root")
);

