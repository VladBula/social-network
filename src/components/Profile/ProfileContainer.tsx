import React from 'react';
import Profile from "./Profile";
import {ActionType, PostsType} from "../../App";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

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
    status:string
    authorizedUserId: number | null
    isAuth:boolean

}

type MapDispatchToPropsType = {
    getProfile:(userId:number | null) => void
    getStatus:(userId:number | null) => void
    updateStatus:(status:string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

// interface Props {
//     profile: ProfileType | null
//     setUserProfile: (profile:ProfileType | null) => void
// }

class ProfileContainer extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId);
        if (!userId) {
            if (this.props.authorizedUserId) {
                userId = this.props.authorizedUserId;
                if (!userId) {
                    this.props.history.push("/login")
                }
            }

        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }



    render() {

        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => ({
    profile:state.profilePage.profile,
    status:state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth:state.auth.isAuth

})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
)(ProfileContainer)



// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
//
//
// export default WithAuthRedirect(connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent));