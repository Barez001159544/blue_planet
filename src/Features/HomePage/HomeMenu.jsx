import "./Components/HomeMenu.css";
import logo from "../../Assets/Images/logo.png";
import PrimaryButton from "../../Utils/PrimaryButton/PrimaryButton";
const HomeMenu = () => {
  return (
    <nav className="home-menu">
      <img className="logo" src={logo} alt="The Blue Planet" />
      <div className="navigation">
        <a href="#">Explore</a>
        <a href="#">Profile</a>
      </div>
      <div className="divider"></div>
      <PrimaryButton label={"UPLOAD"} animated={true} />
    </nav>
  );
};
export default HomeMenu;
