import { NavLink } from "react-router-dom";
import classes from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={classes.userImgItem}>
      <img className={classes.userImg} src={props.src} alt="User's avatar" />
      <span className={classes.userName}>{props.userName}</span>
    </div>
  );
};

export default Friends;
