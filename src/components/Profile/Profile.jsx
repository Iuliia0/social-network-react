import MyPosts from "./My posts/MyPosts";
import classes from "./Profile.module.css";
import PortfolioInfo from "./PortfolioInfo/PortfolioInfo";
import MyPostsContainer from "./My posts/MyPostsСontainer";

const Profile = (props) => {
  return (
    <div>
      <PortfolioInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
