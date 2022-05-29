import React from 'react';
import Profile from "./Profile";
import {PostsType} from "../../App";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type ProfileType = {
    photos: PhotosType
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}
type PhotosType = {
    'small': string
    'large': string
}

export type  ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null | ProfileType
}

type PathParamsType = {
    userId:string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile:ProfileType | null) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

// interface Props {
//     profile: ProfileType | null
//     setUserProfile: (profile:ProfileType | null) => void
// }

class ProfileContainer extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = '2';
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }


}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    profile:state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);