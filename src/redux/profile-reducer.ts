import React from 'react';
import {
    ActionType,
    PostsType,

} from "../App";
import {ProfilePageType, ProfileType} from "../components/Profile/ProfileContainer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {profileAPI} from "../dal/api";


let initialState = {
    posts: [
        {id: 1, message: 'Hi, hoe are you?', likesCount: 12},
        {id: 2, message: 'It is my first post kyy', likesCount: 11},
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra',
    profile: null,
    status: ""
}

type initialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null | ProfileType
    status: string
}

export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        default :
            return state
    }


};

export const addPostAC = (newPostText:string) => ({
    type: 'ADD-POST',newPostText
}) as const

export const setUserProfile = (profile: ProfileType | null) => {
    return {
        type: "SET_USER_PROFILE", profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: "SET_STATUS", status
    } as const
}

export const getProfile = (userId: number | null): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {

        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))

            })
    }
}

export const getStatus = (userId: number | null): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {

        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))

            })
    }
}

export const updateStatus = (status: string): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {

        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(setStatus(status))
                }


            })
    }
}

// export type ActionType = AddPostActionType | UpdateNewPostTextActionType | SendMessageType | UpdateNewMessageBodyType
//
// let initialState = {
//     posts: [
//         {id: 1, message: 'Hi, hoe are you?', likesCount: 12},
//         {id: 2, message: 'It is my first post kyy', likesCount: 11},
//     ],
//     newPostText: 'it-kamasutra'
// }
//
// export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
//     switch (action.type) {
//         case 'ADD-POST': {
//             let newPost = {
//                 id: 5,
//                 message: state.profilePage.newPostText,
//                 likesCount: 0,
//             };
//
//             state.profilePage.posts.push(newPost);
//             state.profilePage.newPostText = "";
//             return state
//         }
//         case 'UPDATE-NEW-POST-TEXT': {
//             state.profilePage.newPostText = action.newText;
//             return state
//         }
//         default :
//             return state
//     }
//
//
// }
//
// export const addPostAC = () => ({
//     type: 'ADD-POST'
// }) as const
//
//
// export const updateNewPostTextAC = (text: string) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT", newText: text
//     } as const
// }