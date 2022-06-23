import {ActionType} from "../App";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {authAPI} from "../dal/api";
import {getAuthUserData, setAuthUserData} from "./auth-reducer";


let initialState = {
    initialized: false

}

type initialStateType = typeof initialState

export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS": {
            return {

                ...state, initialized: true
            }
        }

        default :
            return state
    }
}

export const initializedSuccess = () => ({
    type: 'INITIALIZED_SUCCESS',
}) as const

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, ActionType> => {
    return (dispatch) => {
       let promise = dispatch(getAuthUserData())
         Promise.all([promise])
             .then(() => {
             dispatch(initializedSuccess())
         })

    }
}