import { NavLink } from "react-router-dom";
import classes from "./Message.module.css";
import FromFriends from "./FromFriends/FromFriends";
import FromMe from "./FromMe/FromMe";

const Message = (props) => {
  let messagesFromFriends = props.fromFriend.map((message) => (
    <FromFriends message={message.message} id={message.id} />
  ));

  let messagesFromMe = props.fromMe.map((message) => (
    <FromMe message={message.message} id={message.id} />
  ));
  return (
    <div>
      {messagesFromFriends}
      {messagesFromMe}
    </div>
  );
};

export default Message;
