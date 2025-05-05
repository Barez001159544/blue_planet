import IconButton from "../../Utils/IconButton/IconButton";
import "./Components/DetailPage.css";
import { useLocation } from "react-router-dom";
const DetailPage = () => {
  const location = useLocation();
  const image = location.state?.image;

  if (!image) {
    return <p className="emptiness-message">No image provided</p>;
  }

  const btnIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="black"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );

  return (
    <section className="home-section details-section">
      <div className="details-container">
      <img
        src={image}
        alt="Selected"
        className="detailed-image"
      />
      <div className="details-content">
        <div className="details-header">
          <div className="left-header">
          <IconButton icon={btnIcon}/>
          <IconButton icon={btnIcon}/>
          </div>
          <div className="right-header">
          <IconButton icon={btnIcon}/>
          <IconButton icon={btnIcon}/>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DetailPage;
