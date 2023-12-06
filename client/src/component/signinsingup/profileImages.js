import React from 'react';

const ProfileImage = ({ firstName, lastName }) => {
  const initials = (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();

  return (
    <div className="profile-image">
      {initials}
    </div>
  );
};

export default ProfileImage;