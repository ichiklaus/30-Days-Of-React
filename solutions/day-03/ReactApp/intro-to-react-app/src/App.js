import './App.css';
import './Mobile.css'
import nicolasjpg from './images/me.jpg';

// Global variables
const DATE_OF_START = '27 of february of 2022';
let getCurrentAge = () => {
    const yearBorn = 1994;
    const currentYear = new Date().getFullYear();
    return currentYear - yearBorn;
};

// Header
const headerJSX = (
    <header>
        <div className='intro-info-wrapper'>
            <small className='intro-info'>{DATE_OF_START}</small>
            <small className='intro-info copyright'>@ichiklaus on all my social media </small>
        </div>
        <div className='intro-img-container'>
            <img className='intro-img' src={nicolasjpg} alt='Nicolas' />
        </div>
        <h1 className="intro-title">Hallo! it's <span className="intro-name">@ichiklaus.</span></h1>
        <h2 className="intro-second-title">Welcome to my 30 days of React journey</h2>
        <p className="intro-description">My name's Nicolás Moreira, {getCurrentAge()}. I'm a computer systems engineer undergrad @ Universidad Técnica de Manabí in Portoviejo, Ecuador.
            At the moment I'm growing my career as a software developer in web development.
        </p>
        <p className="intro-description">Here I will document my path to learning react in this 30 days challenge.</p>

    </header>
);

// Main
let gettechsFormatted = () => {
    const ICHIKLAUS_TECHS = ['HTML', 'CSS', 'Sass/SCSS', 'JS', 'React'];
    return ICHIKLAUS_TECHS.map(item => {
        return <li key={item}>{item}</li>
    });
};

const mainJSX = (
    <main>
        <p className="description ">So far I've been learning and working with technologies such as: </p>
        <ul className="tech-stack">
            {gettechsFormatted()}
        </ul>

        <div className="contact-box">
            <label className="fn-input" htmlFor="email">Contact me </label>
            <input type="text" id="email" placeholder="mail@example.com"></input>
        </div>
    </main>
);

// Footer
const footerJSX = (
    <footer>
        <small className="social-links">@ichiklaus on
            <a href="http://Instagram.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Instagram</a> |
            <a href="http://github.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Github</a> |
            <a href="http://frontendmentor.io/profile/ichiklaus" target="_blank" rel="noopener noreferrer"> Frontend Mentor</a>
        </small>
    </footer>
);

const mainApp = [
    <div>
        <div className='container'>
            {headerJSX}
            {mainJSX}
            
        </div>
        {footerJSX}
    </div>
];

export default function App() {
    return (
        mainApp
    );
};
//export default App;