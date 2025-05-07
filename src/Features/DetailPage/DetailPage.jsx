import IconButton from "../../Utils/IconButton/IconButton";
import "./Components/DetailPage.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const DetailPage = () => {
  const location = useLocation();
  const image = location.state?.image;
  const navigate = useNavigate();

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

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleExpandButton = () => {
    window.open(image, "_blank");
  };

  const handleDownloadButton = async (fileName = "", imageUrl) => {
    try {
      const response = await fetch(imageUrl, { mode: 'cors' }); // Ensure CORS is allowed
      const blob = await response.blob();
  
      const url = URL.createObjectURL(blob);
  
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  

  return (
    <section className="home-section details-section">
      <div className="details-container">
        <img src={image} alt="Selected" className="detailed-image" />
        <div className="details-content">
          <div className="details-header">
            <div className="left-header">
              <IconButton icon={backIcon} onClick={handleBackButton} />
            </div>
            <div className="right-header">
              <IconButton icon={downloadIcon} onClick={() => handleDownloadButton("Amazon", image)}/>
              <IconButton icon={expandIcon} onClick={handleExpandButton} />
            </div>
          </div>
          <div className="details-description">
            <div className="details-title">
              <h5>Amazon Rainforest</h5>
              <h6>12.18.02</h6>
            </div>
            <p>
              The Amazon rainforest, covering much of northwestern Brazil and
              extending into Colombia, Peru and other South American countries,
              is the world’s largest tropical rainforest, famed for its
              biodiversity. It’s crisscrossed by thousands of rivers, including
              the powerful Amazon. River towns, with 19th-century architecture
              from rubber-boom days, include Brazil’s Manaus and Belém and
              Peru’s Iquitos and Puerto Maldonado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
