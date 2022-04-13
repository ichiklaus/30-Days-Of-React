import intro from "../styles/modules/Intro.module.css";
const { second_title } = intro;

function NotFound() {
    return (
        <div>
            <h1 className={`intro-second-title ${second_title}`}>The Page you're looking for is not here</h1>
        </div>
    );
}

export default NotFound;