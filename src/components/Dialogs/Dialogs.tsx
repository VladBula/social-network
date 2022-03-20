import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

let dialogsData=[
    {id: 1, name:"Anna"},
    {id: 2, name:"Dan"},

]

    let messagesData=[
        {id:1, message: "hi"},
        {id:2, message: "how r u"},
    ]

    let dialogsElements=dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );




    let messagesElements=messagesData
        .map(message => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;