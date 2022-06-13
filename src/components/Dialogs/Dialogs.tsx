import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogItemType, MessageType} from "../../App";
import {DialogsPropsType} from "./Message/DialogsContainer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogs
        .map(dialog =>
            <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);


    let messagesElements = props.messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)


    // if (!props.isAuth) return <Redirect to={"/login"}/>

    let AddNewMessage = (values:FormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}

type FormValuesType = {
    newMessageBody:string
}

const AddMessageForm :React.FC<InjectedFormProps<FormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' component="textarea" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormValuesType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;