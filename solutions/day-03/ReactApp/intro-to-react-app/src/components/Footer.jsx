// Footer
let Footer = ({
  myInfo: {
    author: { username },
  },
}) => {
  return (
    <footer>
      <small className="social-links">
        {username} on
        <a
          href={`http://Instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Instagram
        </a>{" "}
        |
        <a
          href={`http://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        |
        <a
          href={`http://frontendmentor.io/profile/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Frontend Mentor
        </a>
      </small>
    </footer>
  );
};

export default Footer;
