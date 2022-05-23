import React from 'react';
import loading from "../../../images/Infinity-1s-200px.svg";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div>
            <img className={s.img} src={loading}/>
        </div>
    );
};

export default Preloader;