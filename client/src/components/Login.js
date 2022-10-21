import React, { useState } from 'react';
// import NavBar from "./NavBar";

    function Login({ onLogin }) {
        // State
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")

        // Event Handler for onSubmit event
        function handleSubmit(e) {
            e.preventDefault();
            fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => onLogin(user));
                }
            })
            
        } 

        // View
        return (
        <>
            {/* <NavBar /> */}
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
        );
    }
  

export default Login;