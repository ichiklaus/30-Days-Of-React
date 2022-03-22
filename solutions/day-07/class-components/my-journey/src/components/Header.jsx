import React from "react";
import nicolasjpg from "../images/me.jpg";

const STARTING_DATE = "27 of february of 2022";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // Creating state for Component Props
    this.state = {
      welcometext: props.welcomeSection.welcome,
      // prefersDarkTheme: window.matchMedia("(prefers-color-scheme: dark)")
      //   .matches,
      // icon: document.getElementById("theme-toggler"),
      // themeClassname: this.themeState ? "fas fa-moon" : "fas fa-sun",
      themeState: false,
    };
  }

  // toggleLightMode = () => {
  //   if (this.state.prefersDarkTheme) {
  //     document.body.classList.add("light-theme");
  //   } else {
  //     document.body.classList.remove("light-theme");
  //   }
  // };

  toggleLightMode = () => {
    if (!this.state.themeState) {
      document.body.classList.add("light-theme");
      document.querySelector(".fas").classList.remove("fa-sun");
      document.querySelector(".fas").classList.add("fa-moon");
      return this.setState({ themeState: !this.state.themeState });
    } else {
      document.body.classList.remove("light-theme");
      document.querySelector(".fas").classList.remove("fa-moon");
      document.querySelector(".fas").classList.add("fa-sun");
      return this.setState({ themeState: !this.state.themeState });
    }
  };

  render() {
    const {
      author: { username },
      countryBasedin,
    } = this.props.myInfo;
    return (
      <div className="header-wrapper">
        <header>
          <div className="intro-info-container">
            <div className="intro-info-top">
              <div className="intro-info-wrapper">
                <i
                  id="theme-toggler"
                  className="fas fa-sun fa-lg"
                  onClick={this.toggleLightMode}
                ></i>
                <small className="intro-info"> {STARTING_DATE} </small>
                <small className="intro-info">
                  <span className="copyright">@{username}</span> on all my social
                  media
                </small>
              </div>
            </div>
            <nav id="side-navbar">
              <div className="nav-wrapper">
                <a href="#">/home</a>
                <a href="#about-me-section">/about</a>
                <a href="#topics-section">/journal</a>
              </div>
            </nav>
          </div>
          <div className="paragraph">
            <div className="intro-img-container">
              <img src={nicolasjpg} alt="Nicolás" className="intro-img" />
            </div>
            <h1 className="intro-title">
              {/* Using destructured object to set inner HTML */}
              Hallo! it's <span className="intro-name">{username}.</span>
            </h1>
            {/* Using states to set inner Html */}
            <h2 className="intro-second-title">{this.state.welcometext}</h2>
            <p className="intro-paragraph">
              {/* Using destructured object to set inner HTML */}
              I'm a computer systems engineer based in {countryBasedin}{" "}
              passionate and fully interested in web development and UI/UX.
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
