import React from 'react';
import s from "./Users.module.css";
import userAnnaPhoto from "../../images/anna.jpg";
import {UsersType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users:Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage:number
    onPageChanged: (p:number)=>void

}

const Users = (props:UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span

                        className={props.currentPage === p ? s.selectedPage : ""} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>

                })}
            </div>

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
                            <div>{'location'}</div>
                            <div>{'location'}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;