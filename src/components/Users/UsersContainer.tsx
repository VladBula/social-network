import React from 'react';
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import Users from "./UsersС";

type mapStateToPropsType = {
    users: Array<UsersType>,

}

type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {

            dispatch(followAC(userId))

        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;