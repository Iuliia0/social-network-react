import { NavLink } from "react-router-dom";
import classes from "./FromMe.module.css";

const FromMe = (props) => {
  return (
    <div className={`${classes.message} ${classes.messageFromMe}`}>
      <img
        className={classes.messageUserImg}
        src="https://thispersondoesnotexist.com/image"
        alt="User's avatar"
      />
      <p className={classes.messageUserText}>{props.message}</p>
    </div>
  );
};

export default FromMe;
