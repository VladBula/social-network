import React from 'react';
import userAnnaPhoto from "../../images/anna.jpg";
import s from "./Users.module.css";
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";

interface Props {
    users:Array<UsersType>
    setUsers:(users:UsersType[])=>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class Users extends React.Component<Props>{

    // constructor(props:Props) {
    //     super(props:Props);
    // }

   componentDidMount()
    {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render(){
        return <div>

            {this.props.users.map(u =>
                <div key={u.id}>
                <span>
                <div>


                    <img src={u.photos.small != null ? u.photos.small : userAnnaPhoto} alt='wtf' className={s.userPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> :
                        <button onClick={() => {
                            this.props.follow(u.id)
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
    }
}
export default Users;