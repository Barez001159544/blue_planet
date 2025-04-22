import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import "./Components/LandingPage.css";
import InfoSection from "./InfoSection";

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <InfoSection />
    </div>
  );
};

export default LandingPage;
