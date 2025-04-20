import videoBg from "../../Assets/earth_bg_video.mp4";
import "./Components/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>The Bule Planet</h1>
      </div>
    </div>
  );
};

export default HeroSection;
