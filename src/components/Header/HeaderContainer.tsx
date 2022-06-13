import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {authMe, setUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../dal/api";

type PropsType = OwnPropsType

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    isAuth: boolean
    login:string | null
}

type MapDispatchToPropsType = {
    authMe: () => void
}

class HeaderContainer extends React.Component<PropsType, AppStateType> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps, {authMe})(HeaderContainer);