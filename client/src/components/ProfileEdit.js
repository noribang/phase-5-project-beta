import React, { useState } from 'react';

// function SmsEditMessage({ id, mobile_number, message, onUpdateSmsMessage }) {
function ProfileEdit({ id, firstname, lastname, email, bio, user_id, onUpdateProfileMessage }) {
    // const [isMobile, setIsMobile] = useState(mobile_number);
    // const [isMessage, setIsMessage] = useState(message);

    const [isFirstName, setIsFirstName] = useState(firstname);
    const [isLastName, setIsLastName] = useState(lastname);
    const [isEmail, setIsEmail] = useState(email);
    const [isBio, setIsBio] = useState(bio);


    // function handleSmsFormSubmit(e) {
    //     e.preventDefault();

    //     fetch(`/api/sms_messages/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             mobile_number: isMobile,
    //             message: isMessage,
    //         })
    //     })
    //     .then((r) => r.json())
    //     .then((updatedSmsJSON) => onUpdateSmsMessage(updatedSmsJSON))
    // }

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
            {/* <p>Update Mobile Number / SMS Message</p>
            <form className="edit-sms" onSubmit={handleSmsFormSubmit}>
                <input  
                    type="text"
                    name="mobile"
                    autoComplete="off"
                    value={isMobile}
                    onChange={(e) => setIsMobile(e.target.value)}
                />
                <input  
                    type="text"
                    name="message"
                    autoComplete="off"
                    value={isMessage}
                    onChange={(e) => setIsMessage(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form> */}

            
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