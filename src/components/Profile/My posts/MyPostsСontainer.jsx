import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostCreator,
  updateNewTextCreator,
} from "../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostCreator());
          store.dispatch(updateNewTextCreator(""));
        };

        let onPostChang = (text) => {
          store.dispatch(updateNewTextCreator(text));
        };
        return (
          <MyPosts
            updateNewText={onPostChang}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
