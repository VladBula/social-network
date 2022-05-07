import React from 'react';
import {ActionType} from "../App";


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
            return {...state, users:  [...state.users, ...action.users]}
        }
        default :
            return state
    }


}

export const followAC = (userId: number) => ({
    type: 'FOLLOW',
    userId
}) as const


export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: "SET_USERS",
        users
    } as const
}


