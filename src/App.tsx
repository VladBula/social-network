import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Routes, Route, Link} from "react-router-dom";
import store from "./redux/redux-store";
import SuperDialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import Users from "./components/Users/Users";
import {UsersType} from "./redux/users-reducer";
import UsersContainer from "./components/Users/UsersContainer";

export type MyPostsPropsType={
    posts:Array<PostsType>
}

export type PostsType={
    id:number
    message:string
    likesCount:number
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

export type setUsersACType ={
    type: 'SET_USERS',
    users:Array<UsersType>
}

export type followActionType ={
    type: 'FOLLOW',
    userId :number
}

export type unfollowActionType ={
    type: 'UNFOLLOW',
    userId :number
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType |
    SendMessageActionType | followActionType | unfollowActionType | setUsersACType





function App() {

    const state = store.getState();

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element={<SuperDialogsContainer/>}/>
                    <Route path="/profile" element={<Profile posts={state.profilePage.posts}
                                                             newPostText={state.profilePage.newPostText}
                                                             dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>


                </Routes>
            </div>


        </div>

    );
}

export default App;
