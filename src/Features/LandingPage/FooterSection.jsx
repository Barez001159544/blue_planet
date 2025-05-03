import "./Components/FooterSection.css";
import facebook from "../../Assets/Images/Social/facebook.png";
import twitter from "../../Assets/Images/Social/twitter.png";
import instagram from "../../Assets/Images/Social/instagram.png";
import github from "../../Assets/Images/Social/github.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const FooterSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const [startFooterAnimation, setStartFooterAnimation] = useState(false);

  useEffect(() => {
    if (inView) setStartFooterAnimation(true);
  }, [inView]);

  return (
    <footer>
      <div
        ref={ref}
        className={
          startFooterAnimation
            ? "footer-container"
            : "footer-container footer-container-initial-animation"
        }
      >
        <h1>The Blue Planet</h1>
        <p>
          Search for the keywords to learn more about each warning.
          <br />
          To ignore, add // eslint-disable-next-line to the line before.
        </p>
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
};

export default FooterSection;
