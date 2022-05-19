import React from 'react';
import axios from "axios";
import {UsersType} from "../../redux/users-reducer";
import Users from "./Users";

interface Props {
    users:Array<UsersType>
    setUsers:(users:UsersType[])=>void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage:number
    setCurrentPage:(pageNumber:number) => void
}

class UsersAPIComponent extends React.Component<Props>{

    // constructor(props:Props) {
    //     super(props:Props);
    // }

   componentDidMount()
    {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    onPageChanged = (pageNumber:number) =>  {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(){


        return <Users users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}/>
    }
}
export default UsersAPIComponent;