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
    
        // // Pass current number and sms state for attribute values.
        // let smsObj = {
        //     mobile_number: '1' + number,
        //     message: sms,
        // }

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


    // // onChange handler. 
    // // User types phone number and message.
    // // Changes state for number and sms.
    // const handleChange = (event) => {
    //     if (event.target.name === 'number') {
    //         setNumber(event.target.value);
    //     } else if (event.target.name === 'sms') {
    //         setSms(event.target.value);
    //     }
    // }

    return (
        <>
            <h1>New Twilio Sms Message</h1>
            {/* <form className="new-sms" onSubmit={}> */}
            <form className="new-sms" onSubmit={sendSms}>
                <label>Mobile Number:</label>
                <input  
                    type="text"
                    name="mobile"
                    autoComplete="off"
                    value={numberMobile}
                    onChange={(e) => setNumberMobile(e.target.value)}
                />
                <label>Sms Message:</label>
                <textarea 
                    id="smsmessage" 
                    name="smsmessage" 
                    rows="4" 
                    cols="50"
                    onChange={(e) => setSmsMessage(e.target.value)}
                >
                </textarea>
                {/* <input  
                    type="text"
                    name="message"
                    autoComplete="off"
                    value={isMessage}
                    onChange={(e) => setIsMessage(e.target.value)}
                /> */}
                <input type="submit" value="Send" />
            </form>
        </>
    );
}

export default SmsNewMessage;