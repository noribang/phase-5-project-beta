import React, { useEffect, useState } from 'react';
import SmsMessageList from './SmsMessageList';
import SmsNewMessage from './SmsNewMessage';

function Sms() {
    const [smss, setSmss] = useState([]);

    useEffect(() => {
        // debugger
        fetch("/api/sms_messages")
        .then((r) => r.json())
        .then((sms_data) => setSmss(sms_data))  
        // .then((sms_data) => console.log(sms_data))     
    },[]);

    return (
        <>
            <SmsMessageList 
                smss={smss}
            />
            <SmsNewMessage />
        </>
    );
    
}

export default Sms;