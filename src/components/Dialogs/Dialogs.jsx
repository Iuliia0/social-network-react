import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newMessageBody = props.newMessage;

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };

  let onNewMessageChange = (e) => {
    let message = e.target.value;
    props.onNewMessageChange(message);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messages}>
          <Message
            fromFriend={props.messageData.fromFriend}
            fromMe={props.messageData.fromMe}
          />
        </div>
        <div className={classes.textWrapper}>
          <textarea
            className={classes.textBlock}
            onChange={onNewMessageChange}
            value={newMessageBody}
          ></textarea>
          <button onClick={onSendMessageClick} className={classes.addButton}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
