import IconButton from "../../Utils/IconButton/IconButton";
import "./Components/DetailPage.css";
import { useLocation } from "react-router-dom";
const DetailPage = () => {
  const location = useLocation();
  const image = location.state?.image;

  if (!image) {
    return <p className="emptiness-message">No image provided</p>;
  }

  const backIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
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

  const expandIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  );

  const downloadIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );

  return (
    <section className="home-section details-section">
      <div className="details-container">
        <img src={image} alt="Selected" className="detailed-image" />
        <div className="details-content">
          <div className="details-header">
            <div className="left-header">
              <IconButton icon={backIcon} />
              <IconButton icon={backIcon} />
            </div>
            <div className="right-header">
              <IconButton icon={downloadIcon} />
              <IconButton icon={expandIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
