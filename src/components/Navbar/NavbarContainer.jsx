import StoreContext from "../../StoreContext";
import Friends from "./Friends/Friends";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friendsBlock = store.getState().navbar.friendsBlock;
        return <Navbar friendsBlock={friendsBlock} />;
      }}
    </StoreContext.Consumer>
  );
};

export default NavbarContainer;
