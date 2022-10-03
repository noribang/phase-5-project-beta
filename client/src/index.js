import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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

function About() {
  return (
    <div>
      <h1>This is my about component!!!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password"/>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
document.getElementById("root")
);

