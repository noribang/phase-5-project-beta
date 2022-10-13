import React, { useState } from 'react';
// import NavBar from "./NavBar";

    function Login({ onLogin }) {
        // State
        const [username, setUsername] = useState("")

        // Event Handler for onSubmit event
        function handleSubmit(e) {
            e.preventDefault();
            fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            })
            .then((r) => r.json())
            .then((user) => onLogin(user));

        } 

        // View
        return (
        <>
            {/* <NavBar /> */}
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
        );
    }
  

export default Login;