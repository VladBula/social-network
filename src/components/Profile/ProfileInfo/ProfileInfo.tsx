import React from 'react';
import s from './ProfileInfo.module.css'
import MyPosts from "../MyPosts/MyPosts";
import Profile from "../Profile";
import {ProfileType} from "../ProfileContainer";

type PropsType = {
    profile:ProfileType | null
}

const ProfileInfo = (props:PropsType) => {
    return <div>
        <div>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile?.photos.small}/>
            ava+description
        </div>
    </div>
}
export default ProfileInfo;