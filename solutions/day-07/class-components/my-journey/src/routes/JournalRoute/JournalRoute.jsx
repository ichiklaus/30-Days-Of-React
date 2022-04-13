import Main from "../../layouts/Main";
import { myInfo } from "../../utils/MyInfo";
import actions from "../../utils/Actions";

export default function Journal() {
  return <Main myInfo={myInfo} actions={actions} />;
}
