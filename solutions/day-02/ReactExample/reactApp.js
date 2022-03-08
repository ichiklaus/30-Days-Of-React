// import './styles'
// import {headerStyle} from './styles.js'
// const {headerStyle} = pkgHeaderStyle
// console.log(headerStyle);



// const headerStyle = {
//     margin: '0 auto',
//     padding: '2em',
// };

const DATE_OF_START = `27 of february, 2022`;
let yearBorn = 1994;
let currentYear = new Date().getFullYear();
let currentAge = currentYear - yearBorn;

// Root element to be rendered
const rootElement = document.querySelector(".root");
const headerJSX = (
    <header key={headerJSX}>
        <div className="intro-info-wrapper">
            {/* <small className="intro-info"> 27 of february, 2022</small> */}
            <small className="intro-info"> {DATE_OF_START} </small>
            <small className="intro-info copyright">@ichiklaus on all my social media </small>
        </div>
        <h1 className="intro-title">Hallo! it's <span className="intro-name">@ichiklaus.</span></h1>
        <h2 className="intro-second-title">Welcome to my 30 days of React journey</h2>
        <p className="intro-description">My name's Nicolás Moreira, {currentAge}. I'm a computer systems engineer undergrad @ Universidad Técnica de Manabí in Portoviejo, Ecuador.
            At the moment I'm growing my career as a software developer in web development.
        </p>
        <p className="intro-description">Here I will document my path to learning react in this 30 days challenge.</p>
    </header>
);
const ICHIKLAUS_TECHS = ['HTML', 'CSS', 'Sass/SCSS', 'JS', 'React'];
let techsFormatted = ICHIKLAUS_TECHS.map(item => <li key={item} >{item}</li>);
const mainJSX = (
    <main key={mainJSX} className="main">
        {/* <h3 className="description subtitle">Prerequisites to get started with react.</h3> */}
        {/* <p className="description">Currently, I have a good understanding of HTML, CSS, Sass/SCSS, and JS/ECMA6.</p> */}
        <p className="description ">So far I've been learning and working with technologies such as: </p>
        <ul className="tech-stack">
            {techsFormatted}
        </ul>

        <div className="contact-box">
            <label className="fn-input" htmlFor="email">Contact me </label>
            <input type="text" id="email" placeholder="mail@example.com"></input>
        </div>
    </main>
);
const footerJSX = (
    <footer key={footerJSX}>
        <small className="social-links">@ichiklaus on
            <a href="http://Instagram.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Instagram</a> |
            <a href="http://github.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Github</a> |
            <a href="http://frontendmentor.io/profile/ichiklaus" target="_blank" rel="noopener noreferrer"> Frontend Mentor</a>
        </small>
    </footer>
);

const mainApp = [
    // <div className='container' >
    <div
    // style={header-style}
    >
        <div className="container">
            {headerJSX}
            {mainJSX}
        </div>
        {footerJSX}
    </div>
]
ReactDOM.render(mainApp, rootElement);