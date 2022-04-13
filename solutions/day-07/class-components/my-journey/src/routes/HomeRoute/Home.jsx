// import intro from "../styles/modules/Intro.module.css";
// const { second_title } = intro;

// function Home(props) {
//     return (
//         <div>
//             <h1 className={`intro-second-title ${second_title}`} >Home page</h1>
//         </div>
//     );
// }

// export default Home;

// import App from "../../App";
import Intro from "../../components/Intro";
import { welcomeSection, myInfo } from "../../utils/MyInfo";

function Challenge(props) {
    return <Intro
    welcomeSection={welcomeSection} myInfo={myInfo}
    />
}

export default Challenge;