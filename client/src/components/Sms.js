import React, { useEffect, useState } from 'react';
import SmsMessageList from './SmsMessageList';
// import SmsNewMessage from './SmsNewMessage';
import SmsContext from '../SmsContext';

function Sms() {
    const [smss, setSmss] = useState([]);

    // On page load GET all sms messages.
    useEffect(() => {
        // debugger
        fetch("/api/sms_messages")
        .then((r) => r.json())
        .then((sms_data) => setSmss(sms_data))  
        // .then((sms_data) => console.log(sms_data))     
    },[]);

    // Delete sms message handler.
    // Sms filtered out by id.
    function handleDeleteSms(id) {
        // Array with sms filtered out by id.
        const deleteFilterSms = smss.filter((sms) => sms.id !== id);
        setSmss(deleteFilterSms)
    }

    // Update sms message handler.
    function handleUpdateSms(updatedSmsObj) {
        const updatedSmss = smss.map((sms) => {
            if (sms.id === updatedSmsObj.id) {
                return updatedSmsObj;
            } else {
                return sms;
            }
        });
        setSmss(updatedSmss)
    }
    
    
    return (
        <>
            <SmsContext.Provider value={smss}>
                <SmsMessageList 
                    // smss={smss}
                    onSmsDelete={handleDeleteSms}
                    onUpdateSms={handleUpdateSms}
                />
            </SmsContext.Provider>
        </>
    );
    
}

export default Sms;