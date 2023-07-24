import React from 'react';
import profilePicture from '../assets/picture.jpg'; // Import the profile picture

const ProfilePicture = () => {
    return (
        <div className="profile__picture">
            <img
                src={profilePicture} // Use the imported profile picture as the image source
                alt="Ezra Williams" // Add an alt text for accessibility
                style={{ width: '150px', height: '150px', borderRadius: '50%' }} // Set the desired width and height for the image
            />
        </div>
    );
};

export default ProfilePicture;
