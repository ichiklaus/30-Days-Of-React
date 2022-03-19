import React from "react";
import nicolasjpg from "../images/me.jpg";

const STARTING_DATE = "27 of february of 2022";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // console.log("🚀 ~ file: Header.jsx ~ line 9 ~ Header ~ constructor ~ props", this.props)
    // Creating state for Component Props
    this.state = {
      welcometext: props.welcomeSection.welcome,
      username: props.myInfo.author.username,
      country: props.myInfo.countryBasedOn,
    };
  }
  render() {
    // Destructuring Component Props
    const {
      author: { username },
      country,
    } = this.props.myInfo;
    return (
      <div className="header-wrapper">
        <header>
          <div className="intro-info-wrapper">
            <small className="intro-info"> {STARTING_DATE} </small>
            <small className="intro-info copyright">
              {/* Using destructured object to set inner HTML */}@{username} on
              all my social media
            </small>
          </div>
          <div className="intro-img-container">
            <img src={nicolasjpg} alt="Nicolás" className="intro-img" />
          </div>
          <h1 className="intro-title">
            {/* Using destructured object to set inner HTML */}
            Hallo! it's <span className="intro-name">{username}.</span>
          </h1>
          {/* Using states to set inner Html */}
          <h2 className="intro-second-title">{this.state.welcometext}</h2>
          <p className="paragraph">
            {/* Using destructured object to set inner HTML */}
            I'm a computer systems engineer based in {country} passionate and
            fully interested in web development and UI/UX.
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
