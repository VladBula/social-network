import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";

type PropsType = OwnPropsType

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login:string | null
}

type MapDispatchToPropsType = {
    setUserData: (userId: number | null, email: string | null, login: string | null) => void
}

class HeaderContainer extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps, {setUserData})(HeaderContainer);