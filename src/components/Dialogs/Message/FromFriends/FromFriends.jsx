import { NavLink } from "react-router-dom";
import classes from "./FromFriends.module.css";

const FromFriends = (props) => {
  return (
    <div className={`${classes.message} ${classes.messageFromFriends}`}>
      <img
        className={classes.messageUserImg}
        src="https://thispersondoesnotexist.com/image"
        alt="User's avatar"
      />
      <p className={classes.messageUserText}>{props.message}</p>
    </div>
  );
};

export default FromFriends;
