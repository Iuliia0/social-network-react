import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postsData.map((post) => (
    <Post message={post.message} likePost={`${post.likesCount} likes`} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChang = () => {
    let text = newPostElement.current.value;
    props.updateNewText(text);
  };
  return (
    <div className={classes.content}>
      My post
      <div>
        <textarea
          onChange={onPostChang}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.post}>
        <div>{postElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
