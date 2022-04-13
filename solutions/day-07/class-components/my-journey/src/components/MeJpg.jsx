import nicolasjpg from "../images/me.jpg";
import intro from "../styles/modules/Intro.module.css";

const { img_container, img } = intro;

export default function MeJpg() {
  return (
    <div className={`${img_container} mb-3`}>
      <img src={nicolasjpg} alt="Nicolás" className={img} />
    </div>
  );
}
