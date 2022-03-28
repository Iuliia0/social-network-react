import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <div className={classes.dialog}>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.dialogActive : classes.dialogItem
        }
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
