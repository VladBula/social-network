import React from 'react';
import s from "./Users.module.css";
import userAnnaPhoto from "../../images/anna.jpg";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    toggleFollowingProgress:(isFetching:boolean) => void
    followingInProgress:boolean

}

const Users = (props: UsersPropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>

            <div>
                {pages.map(p => {
                    return <span

                        className={props.currentPage === p ? s.selectedPage : ""} onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>

                })}
            </div>

            {props.users.map(u =>
                    <div key={u.id}>
                <span>
                <div>

    <NavLink to={'/profile/' + u.id}>
    <img src={u.photos.small ? u.photos.small : userAnnaPhoto} alt='wtf'
         className={s.userPhoto}/>
    </NavLink>

                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress} onClick={() => {
                        props.toggleFollowingProgress(true)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY":"bfa7db01-d291-4b43-9a1d-5cdebab39351"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0){
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false)

                                })

                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFollowingProgress(true)

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers:{
                                    "API-KEY":"bfa7db01-d291-4b43-9a1d-5cdebab39351"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0){
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false)

                                })

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