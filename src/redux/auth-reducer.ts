import React from 'react';
import {ActionType} from "../App";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI, profileAPI} from "../dal/api";
import {stopSubmit} from "redux-form";
import {FormAction} from "redux-form/lib/actions";


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

                ...state, ...action.payload
            }
        }

        default :
            return state
    }


}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth:boolean) => ({
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
}) as const

export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {

      return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email:string, password:string, rememberMe:boolean): ThunkAction<void, AppStateType, unknown, ActionType | FormAction> => {
    return (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    if (response.data.messages.length) {
                        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
                    } else {
                        dispatch(stopSubmit('login', {_error: "Some error"}))
                    }

                }
            })
    }
}

export const logout = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> => {
    return async (dispatch) => {

        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}


