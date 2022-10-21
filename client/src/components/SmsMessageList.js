import React, { useContext } from 'react';
import SmsMessage from './SmsMessage';
import { v4 as uuidv4 } from 'uuid';
import SmsContext from '../SmsContext';

// function SmsMessageList({ smss, onSmsDelete, onUpdateSms }) {
function SmsMessageList({ onSmsDelete, onUpdateSms }) {

    const smss = useContext(SmsContext);

    return (
        <>
            <h1>Twilio Sms Message History</h1>
            <ul className="smsmessagelist">
                {smss.map((sms) => (
                    <SmsMessage 
                        key={uuidv4()}
                        sms={sms}
                        onSmsDelete={onSmsDelete}
                        onUpdateSms={onUpdateSms}
                    />
                ))}
            </ul>
        </>
    );
}

export default SmsMessageList;