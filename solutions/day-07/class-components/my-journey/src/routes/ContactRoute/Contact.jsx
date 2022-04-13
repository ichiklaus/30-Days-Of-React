import ContactMe from "../../components/ContactMe";
import actions from "../../utils/Actions";
// import intro from "../../styles/modules/Intro.module.css";
// const { second_title } = intro;

function Contact(props) {
  return (
    // <div>
    //     <h1 className={`intro-second-title ${second_title}`}>Contact page</h1>
    // </div>
    <ContactMe actions={actions} />
  );
}

export default Contact;
