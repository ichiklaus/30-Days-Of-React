import intro from "../styles/modules/Intro.module.css";
const { second_title } = intro;

function About() {
    return (
        <div>
            <h1 className={`intro-second-title ${second_title}`}>About page</h1>
        </div>
    );
}

export default About;