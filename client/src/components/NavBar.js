import React from 'react';
import { NavLink } from 'react-router-dom';

    /* Nav styling */
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
    };
    /* Navbar */
    function NavBar({ setUser, user }) {
        
        function handleLogout() {
            fetch("/api/logout", {method: "DELETE"})
            .then((r) => {
                if (r.ok) {
                    setUser({username: "World! Please Login or Signup to create an account"});
                }
            });
    
        }

        return(
            <div>
                <header>
                    <button onClick={handleLogout}>Logout</button>
                </header>
                {user.id ? <NavLink
                    to="/"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </NavLink> : null}
                <NavLink
                    to="/"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
                >
                    About
                </NavLink>
                {user.id === null ? <NavLink
                    to="/login"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Login
                </NavLink> : null}
                {user.id === null ? <NavLink
                    to="/signup"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Signup
                </NavLink> : null}
                {user.id ? <NavLink
                    to="/messages"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Send SMS
                </NavLink> : null}
                {user.id ? <NavLink
                    to="/sms"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    SMS History
                </NavLink> : null}
                {user.id ? <NavLink
                    to="/profilenew"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    New Profile
                </NavLink> : null}
                {user.id ? <NavLink
                    to="/profileform"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    User Profile
                </NavLink> : null}
            </div>
        );
    }
  
export default NavBar;