import React, { useEffect, useState } from 'react';
import ProfileList from './ProfileList';
import ProfileContext from '../ProfileContext';


function ProfileForm() {
    const [profiles, setProfiles] = useState([]);

    // On page load GET all profiles.
    useEffect(() => {
        // debugger
        fetch("/api/profiles")
        .then((r) => r.json())
        .then((profile_data) => setProfiles(profile_data))     
    },[]);
    
    // Delete profile handler.
    // Profile filtered out by id.
    function handleDeleteProfiles(id) {
        // Array with profile filtered out by id.
        const deleteFilterProfile = profiles.filter((profile) => profile.id !== id);
        setProfiles(deleteFilterProfile)
    }

    // Update profile handler.
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
            <ProfileContext.Provider value={profiles}>
                <ProfileList 
                    // profiles={profiles}
                    onProfileDelete={handleDeleteProfiles}
                    onUpdateProfile={handleUpdateProfile}
                />
            </ProfileContext.Provider>         
        </>       
    );
    
}

// export default Sms;
export default ProfileForm;