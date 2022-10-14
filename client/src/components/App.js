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
  const[user, setUser] = useState(null);

  // On page load try to login user by sessions hash.
  // If user found setUser state is set to user found.
  useEffect(() => {
    fetch("/api/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={(setUser)}/>;

  // if (user) {
  //   return <><NavBar /><h2>Welcome, {user.username}!</h2></>
  // } else {
  //   return <Login onLogin={setUser}/>
  // }

  return (
    <>
      <NavBar setUser={(setUser)}/>
      <h2>Welcome, {user.username}!</h2>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login onLogin={(setUser)}/>
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
