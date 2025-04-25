import "./Components/FooterSection.css";

import facebook from "../../Assets/Images/Social/facebook.png";
import twitter from "../../Assets/Images/Social/twitter.png";
import instagram from "../../Assets/Images/Social/instagram.png";
import github from "../../Assets/Images/Social/github.png";

const FooterSection = () => {
    return (
        <footer>
            <div className="footer-container">
                <h1>The Blue Planet</h1>
                <p>Search for the keywords to learn more about each warning.<br/>
                To ignore, add // eslint-disable-next-line to the line before.</p>
                <div className="social">
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="#">
                        <img src={github} alt="" />
                    </a>
                </div>
                <h6>&copy; 2025 Tawakal All-Rights Reserved.</h6>
            </div>
        </footer>
    );
}

export default FooterSection;