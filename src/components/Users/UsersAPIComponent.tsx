import React from 'react';
import axios from "axios";
import {toggleFollowingProgress, UsersType} from "../../redux/users-reducer";
import Users from "./Users";
import loading from "../../images/Infinity-1s-200px.svg";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../dal/api";

interface Props {
    users: Array<UsersType>
    setUsers: (users: UsersType[]) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching:boolean) => void
    toggleFollowingProgress:(isFetching:boolean) => void
    followingInProgress:boolean
}

class UsersAPIComponent extends React.Component<Props> {

    // constructor(props:Props) {
    //     super(props:Props);
    // }

    componentDidMount() {
        this.props.toggleIsFetching(true);

            usersAPI.getUsers(this.props.pageSize,this.props.currentPage)
            .then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.pageSize,pageNumber)
            .then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

export default UsersAPIComponent;