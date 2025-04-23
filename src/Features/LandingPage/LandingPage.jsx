import HeroSection from "./HeroSection";
import NavigationBar from "./NavigationBar";
import "./Components/LandingPage.css";
import InfoSection from "./InfoSection";
import RecentSection from "./RecentSection";

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <InfoSection />
      <RecentSection />
    </div>
  );
};

export default LandingPage;
