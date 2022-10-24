import { connect } from "react-redux";
import Main from "./Main.jsx";
let mapStateToProps = (state) => {
  return {};
};

const MainContainer = connect(mapStateToProps)(Main);
export default MainContainer;
