import React, {ReactNode} from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {ActionType, PostsType} from "../../App";
import {ProfileType} from "./ProfileContainer";

export type PropsType = {
    profile:ProfileType | null
    updateStatus:(status:string) => void
    status:string
}

const Profile = (props:PropsType) => {


    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

        <MyPostsContainer />
    </div>
}
export default Profile;