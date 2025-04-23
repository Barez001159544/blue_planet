import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import "./Components/LandingPage.css";
import InfoSection from "./InfoSection";
import RecentSection from "./RecentSection";

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="info">
        <InfoSection />
      </div>
      <div id="recent">
        <RecentSection />
      </div>
    </div>
  );
};

export default LandingPage;
