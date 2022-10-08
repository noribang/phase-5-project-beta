import React from 'react';
import SmsEditMessage from './SmsEditMessage';

function SmsMessage({ sms }) {

    const {id, mobile_number, message} = sms

    return (
        <>
            <li>{`Id:${sms.id} Phone:${sms.mobile_number} Message:${sms.message}`}<button>Delete</button><button>Update</button></li>
            {/* <SmsEditMessage /> */}
        </>
    );
}

export default SmsMessage;