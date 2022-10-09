import React from 'react';
import SmsMessage from './SmsMessage';
import { v4 as uuidv4 } from 'uuid';

function SmsMessageList({ smss, onSmsDelete, onUpdateSms }) {

    return (
        <>
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