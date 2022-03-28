import MyPosts from "./My posts/MyPosts";
import classes from "./Profile.module.css";
import PortfolioInfo from "./PortfolioInfo/PortfolioInfo";

const Profile = (props) => {
  return (
    <div>
      <PortfolioInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
        // addPost={props.addPost}
        // updateNewText={props.updateNewText}
      />
    </div>
  );
};

export default Profile;
