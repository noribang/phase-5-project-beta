import React, { useState } from 'react';

function SmsEditMessage({ id, mobile_number, message, onUpdateSmsMessage }) {
    const [isMobile, setIsMobile] = useState(mobile_number);
    const [isMessage, setIsMessage] = useState(message);

    function handleSmsFormSubmit(e) {
        e.preventDefault();

        fetch(`/api/sms_messages/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mobile_number: isMobile,
                message: isMessage,
            })
        })
        .then((r) => r.json())
        .then((updatedSmsJSON) => onUpdateSmsMessage(updatedSmsJSON))
    }


    return (
        <>
            <p>Update Mobile Number / SMS Message</p>
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
            </form>

        </>
    );
}

export default SmsEditMessage;