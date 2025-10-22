import React from "react";
import UserContext from "../context/UserContext";
import "./Login.css";

function Profile() {
  const { user } = React.useContext(UserContext);

  if (!user) return <div className="profile-message">Please Log in 😄</div>;

  return (
    <div className="profile-card">
      <h2>👑 <span>{user.username}</span> 👑</h2>
      <p>Welcome to your profile dashboard</p>
    </div>
  );
}

export default Profile;
