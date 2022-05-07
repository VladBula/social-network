import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';

// const classLink = ({isActive}: any) => isActive ? ${s.link} ${s.link_active} : s.link;

const Navbar = () => {
   return <nav className={s.nav}>
       <div className={s.item}>
           <NavLink /*className={classLink}*/ to="/profile">Profile</NavLink>
       </div>
       <div className={s.item}>
           <NavLink /*className={classLink}*/ to="/dialogs">Messages</NavLink>
       </div>
       <div  className={s.item}>
           <a>News</a>
       </div>
       <div  className={s.item}>
           <a>Music</a>
       </div>
       <div className={s.item}>
           <NavLink /*className={classLink}*/ to="/users">Users</NavLink>
       </div>

       <div  className={s.item}>
           <a>Settings</a>
       </div>
   </nav>
}
export default Navbar;