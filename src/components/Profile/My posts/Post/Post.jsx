import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.imgPost}
        src="https://thispersondoesnotexist.com/image"
      ></img>
      <span>{props.message}</span>
      <div>
        <span>{props.likePost}</span>
      </div>
    </div>
  );
};

export default Post;
