import React from 'react';
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow,
    UsersType
} from "../../redux/users-reducer";

import UsersAPIComponent from "./UsersAPIComponent";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/withAuthRedirect";


type mapStateToPropsType = {
    users: Array<UsersType>,
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:number[]
}

type mapDispatchToPropsType = {

    setCurrentPage: (pageNumber: number) => void

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



export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    follow,
    unfollow
}))(UsersAPIComponent);