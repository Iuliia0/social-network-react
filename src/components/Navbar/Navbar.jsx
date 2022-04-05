import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  let friendsElements = props.friendsBlock.map((item) => (
    <Friends userName={item.userName} id={item.id} src={item.src} />
  ));
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to="/dialogs"
        >
          Message
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to="/news"
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to="/music"
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to="/settings"
        >
          Settings
        </NavLink>
      </div>
      <div className={classes.friendsWrap}>
        <span className={classes.friendsTitle}>Friends</span>
        <div className={classes.userImgBlock}>{friendsElements}</div>
      </div>
    </nav>
  );
};

export default Navbar;
