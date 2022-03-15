import nicolasjpg from "../images/me.jpg";

const STARTING_DATE = "27 of february of 2022";

// Header
let Header = (headerProps) => {
  console.log(
    "🚀 ~ file: Header.jsx ~ line 9 ~ Header ~ headerProps",
    headerProps
  );

  /** Destructuring props for header component */
  const { welcomeSection } = headerProps.welcomeSection;
  const { countryBasedOn } = headerProps.myInfo;
  const { username } = headerProps.myInfo.author;

  // returning HTML for header component
  return (
    <header>
      {/* intro-info-wrapper */}
      <div className="intro-info-wrapper">
        <small className="intro-info">{STARTING_DATE}</small>
        <small className="intro-info copyright">
          @{username} on all my social media{" "}
        </small>
      </div>
      <div className="intro-img-container">
        <img className="intro-img" src={nicolasjpg} alt="Nicolas" />
      </div>
      <h1 className="intro-title">
        Hallo! it's <span className="intro-name">{username}.</span>
      </h1>
      <h2 className="intro-second-title">{welcomeSection}</h2>
      <p className="intro-description">
        I'm a computer systems engineer based in {countryBasedOn} passionate and
        fully interested in web development and UI/UX.
      </p>
    </header>
  );
};

export default Header;
