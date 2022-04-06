import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs.jsx";

let mapStateToProps = (state) => {
  return {
    newMessage: state.messagePage.newMessage,
    messageData: state.messagePage.messageData,
    dialogsData: state.messagePage.dialogsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
      dispatch(updateNewMessageCreator(""));
    },
    onNewMessageChange: (message) => {
      dispatch(updateNewMessageCreator(message));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
