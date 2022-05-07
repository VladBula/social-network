import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store