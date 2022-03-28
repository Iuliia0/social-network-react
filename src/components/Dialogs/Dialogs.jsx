import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newMessage = React.createRef();

  let sendMessage = () => {
    let message = newMessage.current.value;
    props.sendMessage(message);
    props.updateNewMessage("");
  };

  let onPostChang = () => {
    let message = newMessage.current.value;
    props.updateNewMessage(message);
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
            onChange={onPostChang}
            ref={newMessage}
            value={props.state.newMessage}
          ></textarea>
          <button onClick={sendMessage} className={classes.addButton}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
