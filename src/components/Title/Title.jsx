import React from "react";
import style from "./Title.module.scss";
const Title = (props) => {
  return <div className={style.title}>{props.title}</div>;
};

export default Title;
