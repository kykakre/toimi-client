import React from "react";
import logo from "../../assets/logo-white.svg";
import style from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow-footer.svg";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.item}>
          <NavLink to="">
            <img className={style.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="services" className={style.title}>
            Услуги
          </NavLink>
          <NavLink to="" className={style.itemLink}>
            Support and development
          </NavLink>
          <NavLink to="" className={style.itemLink}>
            UI/UX and product design
          </NavLink>
          <NavLink to="" className={style.itemLink}>
            Progressive Web Applications (PWA)
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="company" className={style.title}>
            Компания
          </NavLink>
          <NavLink to="" className={style.itemLink}>
            О компании
          </NavLink>
          <NavLink to="" className={style.itemLink}>
            Проекты
          </NavLink>
          <NavLink to="" className={style.itemLink}>
            Контакты
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="contact" className={style.title}>
            Контакты
          </NavLink>
          <div className={style.flex}>
            <div className={style.column}>
              <a
                href="https://pptcloud.ru/informatika/informatsionnye-tehnologii"
                target="_blank"
                className={style.itemLink}
              >
                Скачать презентацию
                <img src={arrow} alt="arrow" />
              </a>
              <a href="tel:+74999999999" className={style.phone}>
                +7 (499) 999-99-99
              </a>
              <a href="mailto:info@site.com" className={style.mail}>
                info@site.com
              </a>
            </div>
            <div className={style.absolute}>
              <a href="https://web.telegram.org/" className={style.social}></a>
              <a
                href="https://www.whatsapp.com/?lang=ru"
                className={style.social}
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.between}>
        <div className={style.right}>© Company 2022. All rights reserved.</div>
        <NavLink to="#" className={style.link}>
          Политика конфиденциальности
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
