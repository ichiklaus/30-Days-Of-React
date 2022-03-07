// import './styles'
// import {headerStyle} from './styles.js'
// const {headerStyle} = pkgHeaderStyle
// console.log(headerStyle);



// const headerStyle = {
//     margin: '0 auto',
//     padding: '2em',
// };



// Root element to be rendered
const rootElement = document.querySelector(".root");
const headerJSX = (
    <header key={headerJSX}>
        <h1 className="intro-title">Hallo! it's <span className="intro-name">@ichiklaus.</span></h1>
        <h2 className="intro-second-title">Welcome to my 30 days of React journey</h2>
        <div class="intro-info-wrapper">
            <small className="intro-info copyright">@ichiklaus on all my social media</small>
            <small> | </small>
            <small className="intro-info">27 of february, 2022</small>
        </div>
        <p className="intro-description">My real name's Nicolás Moreira, I'm a computer systems engineer undergrad @ Universidad Técnica de Manabí in Portoviejo, Ecuador.
            At the moment I'm growing my career as a software developer in web development.
        </p>
        <p className="intro-description">Here I will document my path to learning react in this 30 days challenge.</p>
    </header>
);
const mainJSX = (
    <main key={mainJSX}>
        <h3 className="description">Prerequisites to get started with react.</h3>
        <p className="description">Currently, I have a good understanding of HTML, CSS, Sass/SCSS, and JS/ECMA6.</p>
        <div>
            <label className="fn-input" htmlFor="firstname">First name </label>
            <input type="text" id="firstname" placeholder="First Name"></input>
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
    <div className="container" 
    // style={header-style}
    >
        {headerJSX}
        {mainJSX}
        {footerJSX}
    </div>
]
ReactDOM.render(mainApp, rootElement);