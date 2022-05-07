import React from 'react';
import {
    ActionType,
    PostsType,

} from "../App";




let initialState = {
    posts: [
        {id: 1, message: 'Hi, hoe are you?', likesCount: 12},
        {id: 2, message: 'It is my first post kyy', likesCount: 11},
    ] as Array<PostsType>,
    newPostText: 'it-kamasutra'
}

type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            // let stateCopy = {...state}
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost);
            // stateCopy.newPostText = "";
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        }
            ;
        case 'UPDATE-NEW-POST-TEXT': {
            // let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            return {...state, newPostText: action.newText}
        }
            ;
        default :
            return state
    }


};

export const addPostAC = () => ({
    type: 'ADD-POST'
}) as const


export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: text
    } as const
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