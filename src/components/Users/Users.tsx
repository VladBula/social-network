import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css'
import axios from 'axios';
import userAnnaPhoto from '../../images/anna.jpg'


const Users = (props: UsersPropsType) => {
    let getUsers = () => {if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })

    }}



    return (

        <div>
            <button onClick={getUsers}>Get Users</button>

            {props.users.map(u =>
                <div key={u.id}>
                <span>
                <div>


                    <img src={u.photos.small != null ? u.photos.small : userAnnaPhoto} alt='wtf' className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{}</div>
                            <div>{}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;