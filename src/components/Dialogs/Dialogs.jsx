import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "./../redux/dialog-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newMessageBody = props.state.newMessage;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
    props.dispatch(updateNewMessageCreator(""));
  };

  let onNewMessageChange = (e) => {
    let message = e.target.value;
    props.dispatch(updateNewMessageCreator(message));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div>
        <div className={classes.messages}>
          <Message
            fromFriend={props.state.messageData.fromFriend}
            fromMe={props.state.messageData.fromMe}
          />
        </div>
        <div className={classes.textWrapper}>
          <textarea
            className={classes.textBlock}
            onChange={onNewMessageChange}
            // ref={newMessage}
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
