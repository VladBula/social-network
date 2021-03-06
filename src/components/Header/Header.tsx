import React, {ReactNode} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    login:string | null
    logout:() => void
}

const Header: React.FC<PropsType> = ({isAuth,login, logout}) => {
   return <header className={s.header}>
        <img src='https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg'
             alt='logo'/>

       <div className={s.loginBlock}>
           {isAuth
               ? <div>{login} - {<button onClick={logout}> Log out </button>}</div> :
           <NavLink to={'/login'}>Login</NavLink>}
       </div>

    </header>
}
export default Header;

// type Props = {
//     title: string,
// };
// const Page: React.FC<Props> = ({
//                                    title,
//                                    children,
//                                }) => (
//     <div>
//         <h1>{title}</h1>
//         {children}
//     </div>
// );