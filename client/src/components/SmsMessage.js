import React from 'react';
import SmsEditMessage from './SmsEditMessage';

function SmsMessage({ sms, onSmsDelete }) {

    const {id, mobile_number, message} = sms

    // Handles click event that deletes sms by id.
    function handleDeleteSmsClick() {
        // Delete from db.
        fetch(`/api/sms_messages/${id}`, {
            method: "DELETE"
        });
        // Updates state
        onSmsDelete(id)
    }

    return (
        <>
            <li>{`Id:${sms.id} Phone:${sms.mobile_number} Message:${sms.message}`}<button onClick={handleDeleteSmsClick}>Delete</button><button>Update</button></li>
            {/* <SmsEditMessage /> */}
        </>
    );
}

export default SmsMessage;