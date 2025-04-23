import earth from "../../Assets/images/earth_3d.png";
import PrimaryButton from "../../Utils/PrimaryButton/PrimaryButton";
import "./Components/InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info-container">
      <img src={earth} alt="Earth 3D Image" />

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
      </div>
    </section>
  );
};

export default InfoSection;
