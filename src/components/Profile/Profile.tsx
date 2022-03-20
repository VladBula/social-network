import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePageType} from "../../redux/state";




const Profile = (props: ProfilePageType) => {


    return <div>
        <ProfileInfo/>

        <MyPosts id={state.profilePage.posts[0].id} message={state.profilePage.posts[0].message} likesCount={state.profilePage.posts[0].likesCount}/>
    </div>
}
export default Profile;