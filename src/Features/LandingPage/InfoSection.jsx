import { use, useEffect, useState } from "react";
import earth from "../../Assets/Images/earth_3d.png";
import PrimaryButton from "../../Utils/PrimaryButton/PrimaryButton";
import "./Components/InfoSection.css";
import { useInView } from "react-intersection-observer";

const InfoSection = () => {
  const { ref, inView} = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [startTypeAnimation, setStartTypingAnimation] = useState(false);

  useEffect(() => {
    if (inView) setStartTypingAnimation(true);
  }, [inView]);

  return (
    <section className="info-container">
      <div className="bg-image">
        <div className="info-content">
          <div ref={ref} className="title-block">
            <h1>Our Home Planet</h1>
            <p className={startTypeAnimation && "type-writer"}>
              Discover the mysteries, beauty, and life that make our home planet
              truly extraordinary.
            </p>
          </div>
          <PrimaryButton label={"Get Started"} />
        </div>
      </div>
      {/* <img src={earth} alt="Earth 3D Image" />

      <div className="info-content">
        <div className="line"></div>

        <div className="info">
          <h6>Our Home Planet</h6>
          <p>
            Embark on a journey through the cosmos—explore distant galaxies,
            uncover space mysteries, and be part of humanity’s stellar future.
            Embark on a journey through the cosmos—explore distant galaxies,
            uncover space mysteries, and be part of humanity’s stellar future.
            Embark on a journey through the cosmos—explore distant galaxies,
            uncover space mysteries, and be part of humanity’s stellar future.
          </p>
          <PrimaryButton label={"Find More Information"} />
        </div>
      </div> */}
    </section>
  );
};

export default InfoSection;
