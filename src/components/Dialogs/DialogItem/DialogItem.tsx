import React from "react";
import s from './../Dialogs.module.css';
import {NavLink, Route, Routes} from "react-router-dom";



type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs/" + props.name;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>

    </div>
}


export default DialogItem;