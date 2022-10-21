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
import ProfileNew from './ProfileNew';
import ProfileForm from './ProfileForm';
import AppSetUserContext from "../AppSetUserContext";

function App() {
  const[user, setUser] = useState({id: null, username: "World! Please Login or Signup to create an account"});
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

    return (
    <>
      <AppSetUserContext.Provider value={{ setUser, user }}>
      {/* <NavBar setUser={(setUser)} user={user}/> */}
      <NavBar user={user}/>
      <h2>Welcome, {user.username}!</h2>
      <Switch>
        <Route path="/login">
          {/* <Login onLogin={(setUser)}/> */}
          <Login />
        </Route>
        <Route path="/about"> 
          <About />
        </Route>
        <Route path="/signup">
          {/* <Signup onLogin={(setUser)} /> */}
          <Signup />
        </Route>
        <Route path="/messages">
          <SmsNewMessage />
        </Route>
        <Route path="/sms">
          <Sms />
        </Route>
        <Route path="/profilenew">
          <ProfileNew />
        </Route>
        <Route path="/profileform">
          <ProfileForm />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </AppSetUserContext.Provider>
    </>
  );
}

export default App;
