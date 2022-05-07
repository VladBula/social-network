import React, {RefObject} from 'react';
import {AppStateType} from "../../../../redux/redux-store";
import { NewPostTextType, PostsType} from "../../../../App";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: NewPostTextType
}

type mapDispatchToPropsType = {
    updateNewPostTex: (text: string) => void
    addPost: () => void
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
        updateNewPostTex: (text: string) => {
            if (text) {
                // props.updateNewPostTex(text)
                dispatch(updateNewPostTextAC(text))
            }
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;