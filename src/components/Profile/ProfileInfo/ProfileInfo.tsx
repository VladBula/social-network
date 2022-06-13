import React from 'react';
import s from './ProfileInfo.module.css'
import MyPosts from "../MyPosts/MyPosts";
import Profile from "../Profile";
import {ProfileType} from "../ProfileContainer";
import ProfileStatus from "./ProfileStatus";
import Preloader from "../../Common/Preloader/Preloader";

type PropsType = {
    profile:ProfileType | null
    updateStatus:(status:string) => void
    status:string
}

const ProfileInfo = (props:PropsType) => {

    // if (!props.profile) {
    //     return <Preloader/>
    // }

    return <div>
        <div>
            <img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile?.photos.small}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
}
export default ProfileInfo;