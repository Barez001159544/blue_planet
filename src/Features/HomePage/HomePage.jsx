import "./Components/HomePage.css";
import Exploration from "./Exploration";
import HomeMenu from "./HomeMenu";

const HomePage = () => {
  return (
    <section className="home-section">
      <HomeMenu />
      <Exploration />
    </section>
  );
};

export default HomePage;
