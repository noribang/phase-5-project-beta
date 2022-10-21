import React, { useState } from 'react';
// import SmsEditMessage from './SmsEditMessage';
import ProfileEdit from './ProfileEdit';

function Profile({ profile, onProfileDelete, onUpdateProfile }) {
    // Profile object destructure.
    const {id, firstname, lastname, email, bio, user_id} = profile
    
    const [isProfileEditing, setIsProfileEditing] = useState(false);
    
    // Handles click event that deletes sms by id.
    function handleDeleteProfileClick() {
        // Delete from db.
        fetch(`/api/profiles/${id}`, {
            method: "DELETE"
        });
        // Updates state
        onProfileDelete(id)
    }

    // Handles the PATCH request JSON.
    function handleUpdateProfileMessage(updatedProfile) {
        setIsProfileEditing(false);
        // This is the handler that is passed in as prop. 
        onUpdateProfile(updatedProfile)
    }
    

    return (
        <>
            <li>
                {isProfileEditing ? (
                    <ProfileEdit 
                        id={id} 
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        bio={bio}
                        user_id={user_id}
                        onUpdateProfileMessage={handleUpdateProfileMessage}
                    />) : (<div>
                            {`Profile_Id:${profile.id} Firstname:${profile.firstname} Lastname:${profile.lastname} Email:${profile.email} Bio:${profile.bio} User_id:${profile.user_id}`}
                            <button onClick={handleDeleteProfileClick}>Delete</button>
                            <button onClick={() => setIsProfileEditing((isProfileEditing) => !isProfileEditing)}>Update</button>
                           </div>
                    )}
            </li>
        </>
    );
}

export default Profile;