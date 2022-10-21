import React, { useState } from 'react';

function ProfileNew() {
    // State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState(''); 

    // Function expression.
    // onSubmit().
    const sendProfile = (event) => {
        event.preventDefault();
    
        // Make POST request
        fetch('/api/profiles/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstName,
                lastname: lastName,
                email: email,
                bio: bio
            })
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    return (
        <>
            <h1>New Profile</h1>
            <form className="new-profile" onSubmit={sendProfile}>
                <div>
                    <label>First Name:</label>
                    <input  
                        type="text"
                        name="firstname"
                        autoComplete="off"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input  
                        type="text"
                        name="lastname"
                        autoComplete="off"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    
                </div>
                <div>
                    <label>Email:</label>
                    <input  
                        type="text"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <input  
                        type="text"
                        name="bio"
                        autoComplete="off"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <input type="submit" value="Send" />
            </form>
        </>
    );
}

export default ProfileNew;