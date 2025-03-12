// write the component code here
import React from "react";

const Usercard = ()=>{
    const profilePhoto = "./src/assets/myphoto.jpg";
     const name = "Sadvika";
     const email = "uppalasadvika06@gmail.com";
     const phone = "9256944379";
     const address = "1234 Main St,City ,State,1234";


return(
    <div>
        <img src={profilePhoto}/>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
    </div>



);



};
export default Usercard;
