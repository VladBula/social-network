import React from 'react';
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {UsersContainerPropsType} from "./UsersContainer";


// interface Props {
//     users: Array<UsersType>
//     setUsers: (users: UsersType[]) => void
//     follow: (userId: number) => void
//     unfollow: (userId: number) => void
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     setCurrentPage: (pageNumber: number) => void
//     isFetching: boolean
//     toggleIsFetching: (isFetching:boolean) => void
//     toggleFollowingProgress:(isFetching:boolean) => void
//     followingInProgress:boolean
//     getUsers:(currentPage:number,pageSize:number) => void
// }

class UsersAPIComponent extends React.Component<UsersContainerPropsType> {

    // constructor(props:Props) {
    //     super(props:Props);
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users}
                   followSuccess={this.props.followSuccess}
                   unfollowSuccess={this.props.unfollowSuccess}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}

            />
        </>
    }
}

export default UsersAPIComponent;