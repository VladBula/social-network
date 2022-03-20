import React from 'react';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogItemPropsType = {
    id: number
    name: string
}

export type MessagePropsType = {
    message: string
    id: number
}

export type ProfilePageType = {
    posts:Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogItemPropsType>
    messages:Array<MessagePropsType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage:DialogsPageType
    sidebar: SidebarType
}

let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, hoe are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Anna"},
            {id: 2, name: "Dan"},

        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "how r u"},
        ]
    },
    sidebar: {}
}

export default state;