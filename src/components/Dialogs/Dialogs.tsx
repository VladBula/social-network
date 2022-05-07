import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../App";
import {DialogsPropsType} from "./Message/DialogsContainer";




// type DialogsPropsType = {
//     dialogs: Array<DialogItemType>
//     messages: Array<MessageType>
//     newMessageBody: string
//     updateNewMessageBody:(body:string) => void
//     sendMessage: () => void
// }

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs
        .map(dialog =>
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    let onSendMessageClick = () => {
       // props.dispatch(sendMessageAC())
        props.sendMessage()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
       // props.dispatch(updateNewMessageBodyAC(body));

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={props.newMessageBody}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;