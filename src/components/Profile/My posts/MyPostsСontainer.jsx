import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostCreator,
  updateNewTextCreator,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewText: (text) => {
      dispatch(updateNewTextCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
      dispatch(updateNewTextCreator(""));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
