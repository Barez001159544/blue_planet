import "./Components/HomeMenu.css";
import logo from "../../Assets/Images/logo.png";
const HomeMenu = () => {
    return (
        <nav className="home-menu">
            <img className= "logo" src={logo} alt="The Blue Planet"/>
            <div className="navigation">
                <a href="#">Explore</a>
                <a href="#">Profile</a>
            </div>
        </nav>
    );
}
export default HomeMenu;