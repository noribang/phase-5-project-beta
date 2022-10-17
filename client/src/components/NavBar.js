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
    function NavBar({ setUser }) {
        
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
                <NavLink
                    to="/"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                    onClick={handleLogout}
                >
                    Logout
                </NavLink>
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
                <NavLink
                    to="/login"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/signup"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Signup
                </NavLink>
                <NavLink
                    to="/messages"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    Send SMS
                </NavLink>
                <NavLink
                    to="/sms"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    SMS History
                </NavLink>
                <NavLink
                    to="/profilenew"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    New Profile
                </NavLink>
                <NavLink
                    to="/profileform"
                    exact
                    style={linkStyles}
                    activeStyle={{
                    background: "darkblue",
                    }}
                >
                    User Profile
                </NavLink>
        
            </div>
        );
    }
  


export default NavBar;