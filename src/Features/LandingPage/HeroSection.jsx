import videoBg from "../../Assets/earth_bg_video.mp4";

const HeroSection = () => {
  return (
    <video autoPlay loop muted playsInline className="background-video">
      <source src={videoBg} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroSection;
