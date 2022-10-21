import React, { useState } from 'react';

function SmsNewMessage() {
    // State
    const [smsMessage, setSmsMessage] = useState('');
    const [numberMobile, setNumberMobile] = useState(''); 

    // Function expression.
    // onSubmit().
    // Sends sms when form submit is clicked.
    const sendSms = (event) => {
        event.preventDefault();
    
        // Make request
        fetch('/api/sms_messages/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify({
                mobile_number: '1' + numberMobile,
                message: smsMessage,
            })
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
    }

    return (
        <>
            <h1>New Twilio Sms Message</h1>
            <form className="new-sms" onSubmit={sendSms}>
                <label>Mobile Number:</label>
                <input  
                    type="text"
                    name="mobile"
                    autoComplete="off"
                    value={numberMobile}
                    onChange={(e) => setNumberMobile(e.target.value)}
                    required
                />
                <label>Sms Message:</label>
                <textarea 
                    id="smsmessage" 
                    name="smsmessage" 
                    rows="4" 
                    cols="50"
                    onChange={(e) => setSmsMessage(e.target.value)}
                    required
                >
                </textarea>
                <input type="submit" value="Send" />
            </form>
        </>
    );
}

export default SmsNewMessage;