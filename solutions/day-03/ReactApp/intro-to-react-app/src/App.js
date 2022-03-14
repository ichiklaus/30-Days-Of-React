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
let HeaderComponent = () => {
    return (
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
            <p className="intro-description">I'm a computer systems engineer based in Ecuador passionate and fully interested in web development and UI/UX.</p>
        </header>
    );
};

// Main
let gettechsFormatted = () => {
    const ICHIKLAUS_TECHS = ['HTML', 'CSS', 'Sass/SCSS', 'JS', 'React'];
    return ICHIKLAUS_TECHS.map(item => {
        return <li key={item}>{item}</li>
    });
};
const myName = {
    firstname: 'Nicolás',
    lastname: 'Moreira',
}

let SubscribeButtonComponent = () => {
    return (
        <button type='button'>Subscribe</button>
    );
}

let MainComponent = () => {
    return (
        <main>
            {/* Section about me */}
            <section className="about-me-section">
                <div className="about-me-header">
                    <h2>/ about me</h2>
                </div>
                <p className="intro-description">My name's {myName.firstname} {myName.lastname}, {getCurrentAge()}. I'm currently working on my theses for my degree in Computer Systems Engineering at Universidad Técnica de Manabí of Portoviejo - Ecuador, while growing my career as a software engineer in web development.
                </p>
                <p className="intro-description">At some point I would like to design and develop videogames ever since I caught interest while experimenting with the Unity Game Engine.</p>
                <p className="intro-description">Here I will document my path to learning react in this 30 days challenge.</p>
            </section>
            {/* Section tech stack */}
            <section className="skills-section">
                <p className="description ">So far I've been learning and working with technologies such as: </p>
                <ul className="tech-stack">
                    {gettechsFormatted()}
                </ul>
            </section>
            <section className="contact-me-section">
                <div className="contact-box">
                    {/* <label className="fn-input" htmlFor="email">Contact me </label> */}
                    <input type="text" id="email" placeholder="mail@example.com"></input>
                    {SubscribeButtonComponent()}
                </div>
                <div>
                    {HexaColor()}
                </div>
            </section>
        </main>
    );
}

let HexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return (
        <p className="intro-description">
            A random hex color picker: {'#' + color}
        </p>
    );
}

// Footer
let FooterComponent = () => {
    return (
        <footer>
            <small className="social-links">@ichiklaus on
                <a href="http://Instagram.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Instagram</a> |
                <a href="http://github.com/ichiklaus" target="_blank" rel="noopener noreferrer"> Github</a> |
                <a href="http://frontendmentor.io/profile/ichiklaus" target="_blank" rel="noopener noreferrer"> Frontend Mentor</a>
            </small>
        </footer>
    );
}

// const mainApp = [
//     <div>
//         <div className='container'>
//             {HeaderComponent()}
//             {MainComponent()}
//         </div>
//         {FooterComponent()}
//     </div>
// ];

let main = () => {
    return (
        <div className='container'>
            <div>
                <HeaderComponent />
                <MainComponent />
            </div>
            <FooterComponent />
        </div>
    );
}

export default function App() {
    return (
        main()
    );
};