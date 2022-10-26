import React,{useEffect} from 'react';
import {Drawer} from "antd";
import style from "./DrawerNavigathion.module.scss"
const DrawerNavigathion = (props) => {

    function close(){
        props.setOpenDrawer(false)
    }

    return (
       <></>
    );
};

export default DrawerNavigathion;