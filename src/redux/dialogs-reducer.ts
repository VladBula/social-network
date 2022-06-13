import React from 'react';
import {ActionType, SendMessageActionType} from "../App";




let initialState = {
    dialogs: [
        {id: 1, name: "Anna"},
        {id: 2, name: "Dan"},

    ],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "how r u"},
    ],
}

type initialStateType = typeof initialState

export const dialogReducer = (state: initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            // let stateCopy = {...state, messages: [...state.messages]};
              let body = action.newMessageBody;
            return {...state, messages: [...state.messages, {id: 3, message: body}]}
        }
        default :
            return state
    }


}


export const sendMessageAC = (newMessageBody:string):SendMessageActionType => {
    return {
        type: 'SEND-MESSAGE', newMessageBody
    } as const
}



// export const dialogReducer = (state: RootStateType, action: ActionType) => {
//     switch (action.type) {
//         case 'UPDATE-NEW-MESSAGE-BODY': {
//             state.dialogsPage.newMessageBody = action.body
//             return state
//         }
//         case 'SEND-MESSAGE': {
//             let body = state.dialogsPage.newMessageBody;
//             state.dialogsPage.newMessageBody = '';
//             state.dialogsPage.messages.push({id: 3, message: body})
//             return state
//         }
//         default :
//             return state
//     }
//
//
// }
//
// export const updateNewMessageBodyAC = (body: string) => {
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         body: body
//     } as const
// }
//
// export const sendMessageAC = () => {
//     return {
//         type: 'SEND-MESSAGE'
//     } as const
// }