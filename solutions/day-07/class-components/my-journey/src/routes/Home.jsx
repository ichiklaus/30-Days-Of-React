import intro from "../styles/modules/Intro.module.css";
const { second_title } = intro;

function Home() {
    return (
        <div>
            <h1 className={`intro-second-title ${second_title}`} >Home page</h1>
        </div>
    );
}

export default Home;