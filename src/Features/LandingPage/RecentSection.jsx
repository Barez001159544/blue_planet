import "./Components/RecentSection.css";
import { useInView } from "react-intersection-observer";

import astronomy from "../../Assets/Images/RecentSectionImages/astronomy.jpg";
import solar_system from "../../Assets/Images/RecentSectionImages/solar_system.jpg";
import telescope from "../../Assets/Images/RecentSectionImages/telescope.jpg";
import universe from "../../Assets/Images/RecentSectionImages/universe.jpg";
import { useEffect, useState } from "react";
import LandingButton from "../../Utils/LandingButton/LandingButton";

const techs = [
  {
    id: 1,
    title: "Eyes on Asteroids",
    link: "https://eyes.nasa.gov/apps/asteroids/#/home",
    summary:
      "Explore the 3D world of Asteroids, Comets and NEOs. Learn about past and future missions, tracking and predicting orbits, and close approaches to Earth.",
    image: solar_system,
  },
  {
    id: 2,
    title: "Eyes on Exoplanets",
    link: "https://eyes.nasa.gov/apps/exo/",
    summary:
      "These planets outside of our solar system are known as Exoplanets. Highlighted stars are known to have, or have good prospects for, orbiting exoplanets.These planets outside of our solar system are known as Exoplanets. Highlighted stars are known to have, or have good prospects for, orbiting exoplanets.",
    image: astronomy,
  },
  {
    id: 3,
    title: "Eyes on Earth",
    link: "https://eyes.nasa.gov/apps/earth/#/",
    summary:
      "A way for you to learn about your home planet, our solar system, the universe beyond and the spacecraft exploring them.",
    image: universe,
  },
  {
    id: 4,
    title: "Solar System Scope",
    link: "https://www.solarsystemscope.com/",
    summary:
      "Solar System Scope is a model of Solar System, Night sky and Outer Space in real time, with accurate positions of objects and lots of interesting facts.",
    image: telescope,
  },
];

const RecentSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const [startItemAnimation, setStrtItemAnimation] = useState(false);

  useEffect(() => {
    if (inView) setStrtItemAnimation(true);
  }, [inView]);
  return (
    <section className="recent-container">
      <h1>Recent Techs</h1>
      <div ref={ref} className="techs">
        {techs.map((tech) => (
          <article
            key={tech.id}
            className={
              startItemAnimation ? "tech-item tech-item-animation" : "tech-item"
            }
          >
            <img src={tech.image} alt="" />
            <div className="tech-content">
              <div className="tech-heading">
                <h6>
                  0{techs.indexOf(tech) + 1}/0{tech.length}
                </h6>
                <div className="tech-heading-line"></div>
              </div>
              <h2>{tech.title}</h2>
              <p>{tech.summary}</p>
              <LandingButton
                label={"Try It Out"}
                onClick={() => window.open(tech.link)}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentSection;
