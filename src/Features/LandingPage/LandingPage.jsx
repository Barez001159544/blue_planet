import "./Components/LandingPage.css";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import RecentSection from "./RecentSection";
import FooterSection from "./FooterSection";

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
      <div id="footer">
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
