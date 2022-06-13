import React, {RefObject} from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import { NewPostTextType, PostsType} from "../../../../App";
import {connect} from "react-redux";
import {addPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: NewPostTextType
}

type mapDispatchToPropsType = {
    addPost: (newPostText:string) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;