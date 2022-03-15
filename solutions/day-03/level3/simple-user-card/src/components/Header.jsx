import React from "react";
import nicolasjpeg from "../images/nicolas.jpeg";

let Header = ({
  myInfo: {
    author: { firstname, lastname, username },
    countryBasedOn,
  },
}) => {
  return (
    <header>
      <div className="profile">
        <img className="profile-photo" src={nicolasjpeg} alt="" />
        <h1 className="profile-title"> {firstname} {lastname} </h1>
        <p>Junior Developer | {countryBasedOn} | @{username}</p>
      </div>
    </header>
  );
};

export default Header;
