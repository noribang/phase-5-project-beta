import React, { useContext } from 'react';
import Profile from './Profile';
import { v4 as uuidv4 } from 'uuid';
// import ExampleContext from '../ExampleContext';
import ProfileContext from '../ProfileContext';


// function ProfileList({ profiles, onProfileDelete, onUpdateProfile }) {
function ProfileList({ onProfileDelete, onUpdateProfile }) {

    // const profiles = useContext(ExampleContext);
    const profiles = useContext(ProfileContext);

    return (
        <>
            <h1>User Profiles</h1>
            {/* console.log(profiles) */}
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