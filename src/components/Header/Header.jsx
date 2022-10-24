import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import more from "../../assets/Telephone/Group 2681.svg";
import style from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/ arrow-header.svg";
const Header = () => {
  const [activeLang, setActiveLang] = useState(false);

  return (
    <div className={style.container}>
      <NavLink to="">
        <img src={logo} className={style.logo} alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to=""
          >
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to="about"
          >
            О компании
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link} `
            }
            to="contact"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
      <div className={style.item}>
        <div
          className={
            activeLang ? ` ${style.lang} ${style.langActive}` : `${style.lang}`
          }
          onClick={() => setActiveLang(true)}
        >
          Ru
        </div>
        <div
          className={
            activeLang ? `${style.lang}` : `${style.lang} ${style.langActive} `
          }
          onClick={() => setActiveLang(false)}
        >
          En
        </div>
        <div className={style.progect}>
          <div className={style.text}>Начать проект</div>
          <img src={arrow} alt="arrow" className={style.arrow} />
        </div>
      </div>
      <img alt="more" className={style.more} src={more} />
    </div>
  );
};

export default Header;
