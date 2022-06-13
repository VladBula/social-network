import React, {ChangeEvent} from "react";
import {sendMessageAC} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {DialogItemType, MessageType} from "../../../App";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import WithAuthRedirect from "../../../hoc/withAuthRedirect";

type mapStateToPropsType ={
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
 type mapDispatchToPropsType = {
     sendMessage: (newMessageBody:string) => void
 }

 export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:AppStateType) : mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,

    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps,mapDispatchToProps)
)(Dialogs);