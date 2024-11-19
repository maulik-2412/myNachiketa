import React, { useState } from "react";
import axios from "axios";

function UserProfile() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`https://lichess.org/api/user/${username}`);
      setProfile(response.data);
    } catch (error) {
      alert("User not found!");
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchProfile}>Get Profile</button>
      {profile && (
        <div>
          <h3>{profile.username}</h3>
          <p>Rating: {profile.perfs.blitz.rating}</p>
          <p>Title: {profile.title || "None"}</p>
          <p>Location: {profile.location || "Unknown"}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
