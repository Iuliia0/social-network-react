import classes from "./PortfolioInfo.module.css";

const PortfolioInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.contentBanner}
          src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default PortfolioInfo;
