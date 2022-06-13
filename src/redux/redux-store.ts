import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {ActionType} from "../App";
import {TypedUseSelectorHook, useSelector} from "react-redux";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});
export type AppDispatch = typeof store.dispatch
export type AppDispatchForThunk = ThunkDispatch<AppStateType, any, ActionType>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

export default store