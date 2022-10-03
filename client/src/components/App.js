import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Login from './Login';
import Messages from './Messages';
import NavBar from './NavBar';
import Signup from './Signup';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
