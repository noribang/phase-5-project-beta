import React from 'react';
// import SmsMessage from './SmsMessage';
import Profile from './Profile';
import { v4 as uuidv4 } from 'uuid';

// function SmsMessageList({ smss, onSmsDelete, onUpdateSms }) {
function ProfileList({ profiles, onProfileDelete, onUpdateProfile }) {

    return (
        <>
            {/* <h1>Twilio Sms Message History</h1>
            <ul className="smsmessagelist">
                {smss.map((sms) => (
                    <SmsMessage 
                        key={uuidv4()}
                        sms={sms}
                        onSmsDelete={onSmsDelete}
                        onUpdateSms={onUpdateSms}
                    />
                ))}
            </ul> */}
            <h1>User Profiles</h1>
            console.log(profiles)
            <ul className="profilelist">
                {profiles.map((profile) => (
                    <Profile 
                        key={uuidv4()}
                        profile={profile}
                        onProfileDelete={onProfileDelete}
                        onUpdateProfile={onUpdateProfile}
                    />
                ))}
            </ul>
        </>
    );
}

// export default SmsMessageList;
export default ProfileList;