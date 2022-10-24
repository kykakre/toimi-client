import { connect } from "react-redux";
import About from "./About.jsx";
let mapStateToProps = (state) => {
  return {};
};

const AboutContainer = connect(mapStateToProps)(About);
export default AboutContainer;
