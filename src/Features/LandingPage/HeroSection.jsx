import videoBg from "../../Assets/Videos/earth_bg_video_reverse.mp4";
import { ROUTES } from "../../Routes/Routes";
import PrimaryButton from "../../Utils/PrimaryButton/PrimaryButton";
import "./Components/HeroSection.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.8;
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <section className="hero-container">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>The Blue Planet</h1>
        <p>Discover the Final Frontier, Space Awaits!</p>
        <PrimaryButton label={"Begin Your Journey"} onClick={handleClick} />
      </div>
    </section>
  );
};

export default HeroSection;
