import React from "react";
import style from "./ContactText.module.scss";
const ContactText = () => {
  return (
    <div className={style.text}>
      Заполните форму ниже и мы свяжемся с вами. Не любите формы? Напишите нам
      на почту <a href="mailto:info@site.com"> info@site.com</a>
    </div>
  );
};

export default ContactText;
