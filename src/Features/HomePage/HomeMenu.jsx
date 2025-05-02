import "./Components/HomeMenu.css";
import logo from "../../Assets/Images/logo.png";
const HomeMenu = () => {
    return (
        <nav className="home-menu">
            <img className= "logo" src={logo} alt="The Blue Planet"/>
        </nav>
    );
}
export default HomeMenu;