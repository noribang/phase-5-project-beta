import React, { useState } from 'react';

function ProfileEdit({ id, firstname, lastname, email, bio, user_id, onUpdateProfileMessage }) {
    // State
    const [isFirstName, setIsFirstName] = useState(firstname);
    const [isLastName, setIsLastName] = useState(lastname);
    const [isEmail, setIsEmail] = useState(email);
    const [isBio, setIsBio] = useState(bio);

    function handleProfileFormSubmit(e) {
        e.preventDefault();

        fetch(`/api/profiles/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstname: isFirstName,
                lastname: isLastName,
                email: isEmail,
                bio: isBio
            })
        })
        .then((r) => r.json())
        .then((updatedProfileJSON) => onUpdateProfileMessage(updatedProfileJSON))
    }


    return (
        <>  
            <p>Update Profile</p>
            <form className="edit-profile" onSubmit={handleProfileFormSubmit}>
                <input  
                    type="text"
                    name="firstname"
                    autoComplete="off"
                    value={isFirstName}
                    onChange={(e) => setIsFirstName(e.target.value)}
                />
                <input  
                    type="text"
                    name="lastname"
                    autoComplete="off"
                    value={isLastName}
                    onChange={(e) => setIsLastName(e.target.value)}
                />
                <input  
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={isEmail}
                    onChange={(e) => setIsEmail(e.target.value)}
                />
                <input  
                    type="text"
                    name="bio"
                    autoComplete="off"
                    value={isBio}
                    onChange={(e) => setIsBio(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>

        </>
    );
}

// export default SmsEditMessage;
export default ProfileEdit