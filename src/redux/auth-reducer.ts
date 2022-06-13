import React from 'react';
import {ActionType} from "../App";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI, profileAPI} from "../dal/api";
import {setUserProfile} from "./profile-reducer";


export type DataType = {
    userId: number | null
    email: string | null
    login: string | null
}


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

type initialStateType = DataType & { isAuth: boolean }

export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {

                ...state, ...action.data,
                isAuth: true
            }
        }

        default :
            return state
    }


}

export const setUserData = (userId: number | null, email: string | null, login: string | null) => ({
    type: 'SET_USER_DATA',
    data: {userId, email, login}
}) as const

export const authMe = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {

        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserData(id, email, login))
                }


            })
    }
}


