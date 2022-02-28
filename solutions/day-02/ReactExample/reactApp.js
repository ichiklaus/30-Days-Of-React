// import './styles'
// import {headerStyle} from './styles.js'
// const {headerStyle} = pkgHeaderStyle
// console.log(headerStyle);


//Styles
const headerStyle = {
    margin: '0 auto',
    padding: '2em',
};

// Root element to be rendered
const rootElement = document.querySelector(".root");
const headerJSX = (
    <header key={headerJSX}>
        <h1>Hallo! it's @ichiklaus.</h1>
        <h2>Welcome to my 30 days of React journey</h2>
        <small>@ichiklaus on all my social media | </small>
        <small>27 of february, 2022</small>
        <p>My real name's Nicolás Moreira, I'm a computer systems engineer undergrad @ Universidad Técnica de Manabí in Portoviejo, Ecuador.
            At the moment I'm growing my career as a software developer in web development.
        </p>
        <p>Here I will document my path to learning react in this 30 days challenge.</p>
    </header>
);
const mainJSX = (
    <main key={mainJSX}>
        <h3>Prerequistes to get started with react.</h3>
        <p>Currently, I have a good understanding of HTML, CSS, Sass/SCSS, and JS/ECMA6.</p>
    </main>
);
const footerJSX = (
    <footer key={footerJSX}>
        <small>@ichiklaus on
            <a href="http://Instagram.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Instagram</a> |
            <a href="http://github.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Github</a> |
            <a href="http://frontendmentor.io/profile/ichiklaus" target="_blank" rel="noopener noreferrer"> Frontend Mentor</a>
        </small>
    </footer>
);
const mainApp = [
    // <div className='container' >
    <div style={headerStyle}>
        {headerJSX}
        {mainJSX}
        {footerJSX}
    </div>
]
ReactDOM.render(mainApp, rootElement);