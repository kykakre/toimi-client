import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import more from "../../assets/Telephone/Group 2681.svg";
import style from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/ arrow-header.svg";
import {Drawer} from "antd";
import DrawerNavigathion from "../DrawerNavigathion/DrawerNavigathion.jsx";
const Header = () => {
  const [activeLang, setActiveLang] = useState(false);
  const[openDrawer,setOpenDrawer] = useState(false)

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className={style.container}>
      <NavLink to="">
        <img src={logo} className={style.logo} alt="logo" />
      </NavLink>
      <ul >
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
      <img alt="more" onClick={()=>setOpenDrawer(!openDrawer)} className={style.more} src={more} />
      <Drawer title="Навигация" placement="right" onClose={onClose} open={openDrawer}>
        <div>
          <ul className={style.drawerNav}>
            <li>
              <NavLink
                  className={({ isActive }) =>
                      isActive ? `${style.link} ${style.active}` : `${style.link} `
                  }
                  onClick={()=>setOpenDrawer(false)}
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
                  onClick={()=>setOpenDrawer(false)}

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
                  onClick={()=>setOpenDrawer(false)}

                  to="contact"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>

      </Drawer>
    </div>
  );
};

export default Header;
