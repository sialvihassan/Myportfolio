import React from 'react';
import './User.css';
const User = () => {
    
  const userData = {
    name: "John Doe",
    bio: "Frontend Developer with a passion for creating beautiful and user-friendly websites.",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
    location: "New York, USA",
    website: "https://johndoe.com",
    followers: 123,
    following: 456,
    posts: 78,
  };

  return (
    <div className="user-page">
      <div className="user-profile">
        <img src={userData.profilePicture} alt="Profile" className="profile-picture" />
        <h2 className="user-name">{userData.name}</h2>
        <p className="user-bio">{userData.bio}</p>
      </div>

      <div className="user-details">
        <p><strong>Location:</strong> {userData.location}</p>
        <p><strong>Website:</strong> <a href={userData.website} target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
      </div>

      <div className="user-stats">
        <div className="stat">
          <h3>{userData.followers}</h3>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h3>{userData.following}</h3>
          <p>Following</p>
        </div>
        <div className="stat">
          <h3>{userData.posts}</h3>
          <p>Posts</p>
        </div>
      </div>
    </div>
  );
};

export default User;
