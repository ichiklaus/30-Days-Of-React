import AboutMe from "../../components/AboutMe";
import MeJpg from "../../components/MeJpg";
// import intro from "../styles/modules/Intro.module.css";
// const { second_title } = intro;

function About(props) {
  return (
    // <div>
    //     <h1 className={`intro-second-title ${second_title}`}>About page</h1>
    // </div>
    <main className="main-wrapper">
      <div className="mt-3">
        <MeJpg />
      </div>
      <AboutMe />
    </main>
  );
}

export default About;
