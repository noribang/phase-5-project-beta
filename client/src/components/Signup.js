import React, { useState, useContext } from 'react';
import AppSetUserContext from "../AppSetUserContext";

    function Signup() {    
        // State
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [passwordConfirmation, setPasswordConfirmation] = useState("");
        const [errors, setErrors] = useState([]);
        // useContext
        const { setUser } = useContext(AppSetUserContext);
        // Handles onSubmit event.
        function handleSubmit(e) {
            e.preventDefault();
            fetch("/api/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",  
                },
                body: JSON.stringify({
                   username,
                   password,
                   password_confirmation: passwordConfirmation, 
                }),
            })
            .then((r) => r.json())
            .then((data) => {
                if(data.errors) {
                    setErrors([...data.errors])
                } else {
                    setUser(data)
                }
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
            }).catch((err) => console.log(err))
        }

        // View JSX
        return(
            <>
                <h1>Sign up</h1>
                {errors.map(e => {
                    setTimeout(() => setErrors([]), 3000)
                    return <p style={{backgroundColor: "pink"}}>{e}</p>
                })}
                <form onSubmit={handleSubmit}>
                   <div>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type='text'
                            id='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                   </div>
                   <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                   </div>
                   <div>
                        <label htmlFor="password_confirmation">Confirm Password:</label>
                        <input 
                            type='password'
                            id='password_confirmation'
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                   </div> 
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
  
export default Signup;