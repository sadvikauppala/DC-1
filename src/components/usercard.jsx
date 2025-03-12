// write the component code here
import React from "react";

const Usercard = ()=>{
    const profilePhoto = "./src/assets/myphoto.jpg";
     const name = "Sarayu";
     const email = "sarayu2926@gmail.com";
     const phone = "99999999999";
     const address = "1234 Main St,City ,State,1234";


return(
    <div>
        <img src={progilephoto}/>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{address}</p>
    </div>



);



};
export default Usercard;
