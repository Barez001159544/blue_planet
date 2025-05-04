import "./Components/FooterSection.css";
import facebook from "../../Assets/Images/Social/facebook.png";
import twitter from "../../Assets/Images/Social/twitter.png";
import instagram from "../../Assets/Images/Social/instagram.png";
import github from "../../Assets/Images/Social/github.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ContactsInfo = [
  {
    id: 1,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009746616856",
    image: facebook,
  },
  {
    id: 2,
    name: "X.com",
    link: "https://x.com/BarezAzadIsmail",
    image: twitter,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/barez_azad_1/",
    image: instagram,
  },
  {
    id: 4,
    name: "GitHub",
    link: "https://github.com/Barez001159544",
    image: github,
  },
];

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
          {ContactsInfo.map((e) => (
            <a key={e.id} href={e.link} target="blank">
              <img src={e.image} alt={e.name} />
            </a>
          ))}
        </div>
        <h6>&copy; 2025 Tawakal All-Rights Reserved.</h6>
      </div>
    </footer>
  );
};

export default FooterSection;
