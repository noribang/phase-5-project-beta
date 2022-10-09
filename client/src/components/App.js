import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import About from './About';
import Home from './Home';
import Login from './Login';
// import SmsForm from './SmsForm';
import NavBar from './NavBar';
import Signup from './Signup';
import Sms from './Sms';
import SmsNewMessage from './SmsNewMessage';

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
          <SmsNewMessage />
        </Route>
        <Route path="/sms">
          <Sms />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
