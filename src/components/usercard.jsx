// write the component code here
import React from "react";
import "./Usercard.css";
import profilePhoto from "../assets/Profile.png";

const Usercard = () => {
  
  const name = "Sreenija";
  const email = "sreeyadalla@gmail.com";
  const phone = "7995775302";

  return (
    <div className="user-card">
      <img src={profilePhoto} alt="Profile" className="profile-photo" />
      <h1>{name}</h1>
      <p className="email">{email}</p>
      <p className="phone">{phone}</p>
    </div>
  );
};
export default Usercard;