import React from "react";
import style from "./BreadCrumbs.module.scss";
const BreadCrumbs = () => {
  return (
    <div className={style.flex}>
      <div className={style.item}>Главная </div>
      <div className={`${style.item} ${style.active}`}>- Контакты</div>
    </div>
  );
};

export default BreadCrumbs;
