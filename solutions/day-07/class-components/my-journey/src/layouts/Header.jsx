import React from "react";
import nicolasjpg from "../images/me.jpg";
import { myInfo } from "../utils/MyInfo";

const STARTING_DATE = "27 of february of 2022";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // Creating state for Component Props
    this.state = {
      welcometext: props.welcomeSection.welcome,
      themeState: false,
      techStack: myInfo.techStack,
      loggedIn: false,
      message: "",
    };
  }

  // An Action Button component
  ActionButton = ({ text, actions }) => {
    return (
      <button
        className={
          text === `Subscribe`
            ? `button button--submit`
            : `button button--submit margin`
        }
        onClick={actions}
      >
        {text}
      </button>
    );
  };

  // Used to handle login state
  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
    // console.log(
    //   "🚀 ~ file: App.js ~ line 22 ~ App ~ this.state.loggedIn",
    //   this.state.loggedIn
    // );
  };

  // Displays current state for login handler
  Status = () => {
    return this.state.loggedIn === ""? (
      <h3 className="welcome-message">
        Welcome to my 30 days of React journey
      </h3>
    ) : (
      <h3 className="welcome-message">Please, log in to continue</h3>
    );
  };

  GettingStarted = () => {
    return (
      <h3 id="login-message">
        Please login to access more information about 30 Days Of React challenge
      </h3>
    );
  };

  Prerrequistes = () => {
    return <h3 id="login-message">You have all the prerequisite courses to get started with React</h3>;
  };

  // Display messages
  Message = () => <h5> {this.state.message} </h5>;

  // For datetime display function
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[time.getMonth()];
    const year = time.getFullYear();
    const date = time.getDate();
    return `${date} of ${month} of ${year}`;
  };

  // State for datetime handler
  datetimeHandler = () => {
    this.state.message === ""
      ? this.setState({ message: this.showDate(new Date()) })
      : this.setState({ message: "" });
  };

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
    let loggedInText = this.state.loggedIn ? "Logout" : "Log in";
    const {
      author: { username },
      countryBasedin,
    } = this.props.myInfo;
    return (
      <div id="home" className="header-wrapper">
        <div className="login-wrapper">
          <div className="action-wrapper">
            <this.ActionButton text={loggedInText} actions={this.handleLogin} />
            <this.ActionButton
              text={`Show Date`}
              actions={this.datetimeHandler}
            />
          </div>
          {/* Conditional Rendering using &&  */}
          {!this.state.loggedIn && ( // Checks the login status, if it's not logged in, it displays Please login text from GettingStarted Component
            <this.GettingStarted />
          )}
          {/* <this.Status /> */}
          {this.state.techStack.length >= 3 && this.state.loggedIn && (
            <this.Prerrequistes />
          )}
          <div className="display-datetime">
            <this.Message message={this.state.message} />
          </div>
        </div>

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
                  <span className="copyright">@{username}</span> on all my
                  social media
                </small>
              </div>
            </div>
            <nav id="side-navbar">
              <div className="nav-wrapper">
                <a href="#home">/home</a>
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
