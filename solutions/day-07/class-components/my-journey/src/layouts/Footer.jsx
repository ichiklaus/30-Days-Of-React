import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.myInfo.author.username,
    };
  }

  render() {
    return (
      <div className="footer-wrap">
        <footer>
          <span className="social-links">
            <span className="copyright">@{this.state.username}</span> on
            <a
              href={`http://Instagram.com/${this.state.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>{" "}
            |
            <a
              href={`http://github.com/${this.state.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Github
            </a>{" "}
            |
            <a
              href={`http://frontendmentor.io/profile/${this.state.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Frontend Mentor
            </a>
          </span>
        </footer>
      </div>
    );
  }
}
