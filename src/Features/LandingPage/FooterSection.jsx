import "./Components/FooterSection.css";

import universe from "../../Assets/Images/RecentSectionImages/universe.jpg";

const FooterSection = () => {
    return (
        <footer>
            <div className="footer-container">
                <h1>The Blue Planet</h1>
                <p>Search for the keywords to learn more about each warning.
                To ignore, add // eslint-disable-next-line to the line before.</p>
                <div className="social">
                    <a href="#">
                        <img src={universe} alt="" />
                    </a>
                    <a href="#">
                        <img src={universe} alt="" />
                    </a>
                    <a href="#">
                        <img src={universe} alt="" />
                    </a>
                    <a href="#">
                        <img src={universe} alt="" />
                    </a>
                </div>
                <h1>&copy; 2025 Tawakal All-Rights Reserved.</h1>
            </div>
        </footer>
    );
}

export default FooterSection;