import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authAPI} from "../../dal/api";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type PropsType = OwnPropsType

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login:string | null
}

type MapDispatchToPropsType = {
    logout:() => void
}

class HeaderContainer extends React.Component<PropsType, AppStateType> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps, { logout})(HeaderContainer);