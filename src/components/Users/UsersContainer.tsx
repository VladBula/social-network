import React from 'react';
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess,
    getUsers,
    setCurrentPage,
    setUsers, toggleFollowingProgress,
    toggleIsFetching, unfollow, unfollowSuccess,

    UsersType
} from "../../redux/users-reducer";

import UsersAPIComponent from "./UsersAPIComponent";


type mapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
}

type mapDispatchToPropsType = {
    followSuccess: (userId: number) => void,
    unfollowSuccess: (userId: number) => void,
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching:boolean, userId:number) => void
    getUsers:(currentPage:number,pageSize:number) => void
    follow:(userId:number) => void
    unfollow:(userId:number) => void
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress

    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//
//             dispatch(followAC(userId))
//
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber:number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching:boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow
})(UsersAPIComponent)

export default UsersContainer;