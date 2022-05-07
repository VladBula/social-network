import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {ActionType, PostsType} from "../../App";

type ProfilePagePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfilePagePropsType) => {


    return <div>
        <ProfileInfo/>

        <MyPostsContainer />
    </div>
}
export default Profile;