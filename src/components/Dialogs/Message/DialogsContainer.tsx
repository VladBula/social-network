import React, {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogs-reducer";
import Dialogs from "../Dialogs";
import {DialogItemType, MessageType} from "../../../App";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType ={
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageBody: string
}
 type mapDispatchToPropsType = {
     updateNewMessageBody: (body:string) => void
     sendMessage: () => void
 }

 export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:AppStateType) : mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default SuperDialogsContainer;