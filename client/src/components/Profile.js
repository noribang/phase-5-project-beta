import React, { useState } from 'react';
// import SmsEditMessage from './SmsEditMessage';
import ProfileEdit from './ProfileEdit';

// function SmsMessage({ sms, onSmsDelete, onUpdateSms }) {
function Profile({ profile, onProfileDelete, onUpdateProfile }) {
    // // Sms object
    // const {id, mobile_number, message, users} = sms
    // Profile object destructure.
    const {id, firstname, lastname, email, bio, user_id} = profile
    
    // const [isSmsEditing, setIsSmsEditing] = useState(false);
    // const [isSmsUsername, setIsSmsUsername] = useState(sms.users);
    const [isProfileEditing, setIsProfileEditing] = useState(false);
    

    // // Handles click event that deletes sms by id.
    // function handleDeleteSmsClick() {
    //     // Delete from db.
    //     fetch(`/api/sms_messages/${id}`, {
    //         method: "DELETE"
    //     });
    //     // Updates state
    //     onSmsDelete(id)
    // }

    // Handles click event that deletes sms by id.
    function handleDeleteProfileClick() {
        // Delete from db.
        fetch(`/api/profiles/${id}`, {
            method: "DELETE"
        });
        // Updates state
        onProfileDelete(id)
    }

    // // Handles the PATCH request JSON.
    // function handleUpdateSmsMessage(updatedSms) {
    //     setIsSmsEditing(false);
    //     // This is the handler that is passed in as prop. 
    //     onUpdateSms(updatedSms)
    // }

    // Handles the PATCH request JSON.
    function handleUpdateProfileMessage(updatedProfile) {
        setIsProfileEditing(false);
        // This is the handler that is passed in as prop. 
        onUpdateProfile(updatedProfile)
    }
    

    return (
        <>
            {/* <li>
                {isSmsEditing ? (
                    <SmsEditMessage 
                        id={id} 
                        mobile_number={mobile_number}
                        message={message}
                        onUpdateSmsMessage={handleUpdateSmsMessage}
                    />) : (<div>
                            {`Sms_Id:${sms.id} Phone:${sms.mobile_number} Message:${sms.message}`}
                            <button onClick={handleDeleteSmsClick}>Delete</button>
                            <button onClick={() => setIsSmsEditing((isSmsEditing) => !isSmsEditing)}>Update</button>
                           </div>
                    )}


            </li> */}

            <li>
                {isProfileEditing ? (
                    <ProfileEdit 
                        id={id} 
                        // mobile_number={mobile_number}
                        // message={message}
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        bio={bio}
                        user_id={user_id}
                        // onUpdateSmsMessage={handleUpdateSmsMessage}
                        onUpdateProfileMessage={handleUpdateProfileMessage}
                    />) : (<div>
                            {/* {`Sms_Id:${sms.id} Phone:${sms.mobile_number} Message:${sms.message}`}
                            <button onClick={handleDeleteSmsClick}>Delete</button>
                            <button onClick={() => setIsSmsEditing((isSmsEditing) => !isSmsEditing)}>Update</button> */}
                            {`Profile_Id:${profile.id} Firstname:${profile.firstname} Lastname:${profile.lastname} Email:${profile.email} Bio:${profile.bio} User_id:${profile.user_id}`}
                            <button onClick={handleDeleteProfileClick}>Delete</button>
                            <button onClick={() => setIsProfileEditing((isProfileEditing) => !isProfileEditing)}>Update</button>
                           </div>
                    )}


            </li>
        </>
    );
}

// export default SmsMessage;
export default Profile;