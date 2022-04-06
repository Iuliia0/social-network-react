import Friends from "./Friends/Friends";
import Navbar from "./Navbar";
import { connect } from "react-redux";

// const NavbarContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let friendsBlock = store.getState().navbar.friendsBlock;
//         return <Navbar friendsBlock={friendsBlock} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    friendsBlock: state.navbar.friendsBlock,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
