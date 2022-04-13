import intro from "../styles/modules/Intro.module.css";
const { second_title } = intro;

function Contact() {
    return (
        <div>
            <h1 className={`intro-second-title ${second_title}`}>Contact page</h1>
        </div>
    );
}

export default Contact;