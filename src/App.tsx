import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Link} from "react-router-dom";
import store from "./redux/redux-store";
import SuperDialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import {UsersType} from "./redux/users-reducer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {ProfileType} from "./components/Profile/ProfileContainer";
import {DataType} from "./redux/auth-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

export type MyPostsPropsType = {
    posts: Array<PostsType>
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}


export type DialogItemType = {
    id: number
    name: string
}

export type MessageType = {
    message: string
    id: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string

}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type NewPostTextType = string


export type GlobalType = {
    store: StoreType
}

export type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void,
    dispatch: (action: ActionType) => void

}

export type setUsersACType = {
    type: 'SET_USERS',
    users: Array<UsersType>
}

export type followActionType = {
    type: 'FOLLOW',
    userId: number
}

export type unfollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE',newMessageBody:string
}

export type AddPostActionType = {
    type: 'ADD-POST',newPostText:string
}

export type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}

export type toggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
}
export type setUserProfileActionType = {
    type: 'SET_USER_PROFILE',
    profile: ProfileType | null
}
export type setUserDataActionType = {
    type: 'SET_USER_DATA',
    data: DataType | null
}
export type toggleFollowingProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching: boolean,
    userId: number
}

export type setStatusType = {
    type:'SET_STATUS',
    status:string
}

export type ActionType = AddPostActionType | SendMessageActionType | followActionType | unfollowActionType | setUsersACType | SetCurrentPageActionType |
    toggleIsFetchingActionType | setUserProfileActionType | setUserDataActionType | toggleFollowingProgressActionType |
    setStatusType


function App() {

    const state = store.getState();

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Route path="/dialogs" render={() => <SuperDialogsContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>


            </div>


        </div>

    );
}

export default App;
