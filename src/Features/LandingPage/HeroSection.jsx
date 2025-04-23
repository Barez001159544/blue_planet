import videoBg from "../../Assets/earth_bg_video.mp4";
import PrimaryButton from "../../Utils/PrimaryButton/PrimaryButton";
import "./Components/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>The Blue Planet</h1>
        <p>Discover the Final Frontier, Space Awaits!</p>
        <PrimaryButton label={"Begin Your Journey"} />
      </div>
    </section>
  );
};

export default HeroSection;
