import React from 'react';
import {ActionType} from "../App";


export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
}


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false

}

type initialStateType = DataType & {isAuth: boolean}

export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {

                ...state, ...action.data,
                isAuth:true
            }
        }

        default :
            return state
    }


}

export const setUserData = (userId: number | null, email:string | null, login:string | null) => ({
    type: 'SET_USER_DATA',
    data:{userId, email, login}
}) as const



