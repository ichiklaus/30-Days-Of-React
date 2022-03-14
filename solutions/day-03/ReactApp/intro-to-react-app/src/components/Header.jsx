import React from "react";
import nicolasjpg from "../images/me.jpg";

const DATE_OF_START = "27 of february of 2022";

// Header
let Header = (headerProps) => {
  console.log(
    "🚀 ~ file: Header.jsx ~ line 9 ~ Header ~ headerProps",
    headerProps
  );
  return (
    <header>
      {/* intro-info-wrapper */}
      <div className="intro-info-wrapper">
        <small className="intro-info">{DATE_OF_START}</small>
        <small className="intro-info copyright">
          {headerProps.username} on all my social media{" "}
        </small>
      </div>
      <div className="intro-img-container">
        <img className="intro-img" src={nicolasjpg} alt="Nicolas" />
      </div>
      <h1 className="intro-title">
        Hallo! it's <span className="intro-name">{headerProps.username}.</span>
      </h1>
      <h2 className="intro-second-title">{headerProps.welcome}</h2>
      <p className="intro-description">
        I'm a computer systems engineer based in {headerProps.country}{" "}
        passionate and fully interested in web development and UI/UX.
      </p>
    </header>
  );
};

export default Header;
