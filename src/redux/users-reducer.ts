import React from 'react';
import {ActionType, toggleFollowingProgressActionType} from "../App";


type LocationType = {
    city: string,
    country: string
}

export type UsersType = {
    followed : boolean
    id: number
    name:string
    photos: {small:null|string, large:null|string}
    status:null|string
    uniqueUrlName:null|string
    // id: number,
    // photoUrl: string,
    // followed: boolean,
    // fullName: string,
    // status: string,
    // location: LocationType
}

let initialState = {
     users: [ ] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 40,
    currentPage: 2,
    isFetching: false,
    followingInProgress:false

}

type initialStateType = typeof initialState

export const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {

                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {

                ...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case "SET_USERS": {
            return {...state, users:  action.users}
        }
        case "SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {...state, followingInProgress: action.isFetching}
        }
        default :
            return state
    }


}

export const follow = (userId: number) => ({
    type: 'FOLLOW',
    userId
}) as const


export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage:number) => {
    return{
        type:"SET_CURRENT_PAGE",
        currentPage
    } as const
}

export const toggleIsFetching = (isFetching:boolean) => {
    return{
        type:"TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching:boolean) => {
    return{
        type:"TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching
    } as const
}

