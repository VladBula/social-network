import React from 'react';
import {ActionType} from "../App";




let initialState = {
    dialogs: [
        {id: 1, name: "Anna"},
        {id: 2, name: "Dan"},

    ],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "how r u"},
    ],
    newMessageBody: ''
}

type initialStateType = typeof initialState

export const dialogReducer = (state: initialStateType = initialState, action: ActionType):initialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            // state.newMessageBody = action.body
            return {...state, newMessageBody: action.body}
        }
        case 'SEND-MESSAGE': {
            // let stateCopy = {...state, messages: [...state.messages]};
              let body = state.newMessageBody;
            // stateCopy.newMessageBody = '';
            // stateCopy.messages.push({id: 3, message: body})
            return {...state, messages: [...state.messages, {id: 3, message: body}]}
        }
        default :
            return state
    }


}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
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