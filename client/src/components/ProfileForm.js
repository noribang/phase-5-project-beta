import React, { useEffect, useState } from 'react';
// import SmsMessageList from './SmsMessageList';
// import SmsNewMessage from './SmsNewMessage';
import ProfileList from './ProfileList';
// import SmsNewMessage from './SmsNewMessage';

// function Sms() {
function ProfileForm() {
    // const [smss, setSmss] = useState([]);
    const [profiles, setProfiles] = useState([]);

    // On page load GET all profiles.
    useEffect(() => {
        // debugger
        fetch("/api/profiles")
        .then((r) => r.json())
        .then((profile_data) => setProfiles(profile_data))  
        // .then((sms_data) => console.log(sms_data))     
    },[]);

    // // Delete sms message handler.
    // // Sms filtered out by id.
    // function handleDeleteSms(id) {
    //     // Array with sms filtered out by id.
    //     const deleteFilterSms = smss.filter((sms) => sms.id !== id);
    //     setSmss(deleteFilterSms)
    // }

    // Delete sms message handler.
    // Sms filtered out by id.
    function handleDeleteProfiles(id) {
        // Array with profile filtered out by id.
        const deleteFilterProfile = profiles.filter((profile) => profile.id !== id);
        setProfiles(deleteFilterProfile)
    }

    // // Update sms message handler.
    // function handleUpdateSms(updatedSmsObj) {
    //     const updatedSmss = smss.map((sms) => {
    //         if (sms.id === updatedSmsObj.id) {
    //             return updatedSmsObj;
    //         } else {
    //             return sms;
    //         }
    //     });
    //     setSmss(updatedSmss)
    // }

    
    // Update sms message handler.
    function handleUpdateProfile(updatedProfileObj) {
        const updatedProfiles = profiles.map((profile) => {
            if (profile.id === updatedProfileObj.id) {
                return updatedProfileObj;
            } else {
                return profile;
            }
        });
        setProfiles(updatedProfiles)
    }
    
    
    return (
        <>
            <ProfileList 
                profiles={profiles}
                onProfileDelete={handleDeleteProfiles}
                onUpdateProfile={handleUpdateProfile}
            />
            
        </>
        // <>
        //     <SmsMessageList 
        //         smss={smss}
        //         onSmsDelete={handleDeleteSms}
        //         onUpdateSms={handleUpdateSms}
        //     />
            
        // </>
    );
    
}

// export default Sms;
export default ProfileForm;