import React, { useState } from 'react';
import SmsEditMessage from './SmsEditMessage';

function SmsMessage({ sms, onSmsDelete, onUpdateSms }) {
    // const [isEditing, setIsEditing] = useState(false);
    const [isSmsEditing, setIsSmsEditing] = useState(false);

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

    // Handles the PATCH request JSON.
    function handleUpdateSmsMessage(updatedSms) {
        setIsSmsEditing(false);
        // This is the handler that is passed in as prop. 
        onUpdateSms(updatedSms)
    }

    return (
        <>
            <li>
                {isSmsEditing ? (
                    <SmsEditMessage 
                        id={id} 
                        mobile_number={mobile_number}
                        message={message}
                        onUpdateSmsMessage={handleUpdateSmsMessage}
                    />) : (<div>
                            {`Id:${sms.id} Phone:${sms.mobile_number} Message:${sms.message}`}
                            <button onClick={handleDeleteSmsClick}>Delete</button>
                            <button onClick={() => setIsSmsEditing((isSmsEditing) => !isSmsEditing)}>Update</button>
                           </div>
                    )}


            </li>
        </>
    );
}

export default SmsMessage;