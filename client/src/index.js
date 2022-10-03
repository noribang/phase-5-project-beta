import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

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

// /* Nav styling */
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// /* Navbar */
// function NavBar() {
//   return(
//     <div>
//       <NavLink
//         to="/"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//       to="/about"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/signup"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Signup
//       </NavLink>
//       <NavLink
//         to="/messages"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue",
//         }}
//       >
//         Messages
//       </NavLink>

//     </div>
//   );
// }

// /* Components */
// function Home() {
//   return(
//     <div>
//       <h1>Welcome to Twilio App</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>This is my about component!!!</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username"/>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password"/>
//         </div>
//         <input type="submit" value="Submit"/>
//       </form>
//     </div>
//   );
// }

// function Signup() {
//   return(
//     <div>
//       <h1>Sign up here:</h1>
//     </div>
//   );
// }

// function Messages() {
//   return(
//     <div>
//       <h1>Messages here:</h1>
//     </div>
//   );
// }


/* Routes */
ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <NavBar />
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
    </Switch> */}
  </BrowserRouter>,
document.getElementById("root")
);

