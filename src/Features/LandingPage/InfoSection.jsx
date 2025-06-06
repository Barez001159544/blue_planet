import { useEffect, useState, useRef } from "react";
import LandingButton from "../../Utils/LandingButton/LandingButton";
import "./Components/InfoSection.css";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect/dist/core";
import { ROUTES } from "../../Routes/Routes";
import { useNavigate } from "react-router-dom";

const InfoSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.HOME);
  };
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const [startTypeAnimation, setStartTypingAnimation] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (inView && !startTypeAnimation) {
      setStartTypingAnimation(true);
    }
  }, [inView, startTypeAnimation]);

  useEffect(() => {
    if (startTypeAnimation && textRef.current) {
      const typewriter = new Typewriter(textRef.current, {
        strings: [
          "Discover the mysteries, beauty, and life that make our home planet truly extraordinary.",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        pauseFor: 300000,
      });

      typewriter.start();
    }
  }, [startTypeAnimation]);

  return (
    <section className="info-container">
      <div className="bg-image">
        <div className="info-content">
          <div ref={ref} className="title-block">
            <h1>Our Home Planet</h1>
            <p ref={textRef}></p>
          </div>
          <LandingButton label={"Get Started"} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
