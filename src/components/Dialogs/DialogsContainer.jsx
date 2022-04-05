import React from "react";
import StoreContext from "../../StoreContext";
import {
  sendMessageCreator,
  updateNewMessageCreator,
} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs.jsx";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
          store.dispatch(updateNewMessageCreator(""));
        };

        let onNewMessageChange = (message) => {
          store.dispatch(updateNewMessageCreator(message));
        };
        return (
          <Dialogs
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            newMessage={state.messagePage.newMessage}
            messageData={state.messagePage.messageData}
            dialogsData={state.messagePage.dialogsData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
