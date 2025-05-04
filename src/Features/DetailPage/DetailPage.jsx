import "./Components/DetailPage.css";
import { useLocation } from "react-router-dom";
const DetailPage = () => {
  const location = useLocation();
  const image = location.state?.image;

  if (!image) {
    return <p>No image provided</p>;
  }

  return (
    <section className="detail-container">
      <img
        src={image}
        alt="Selected"
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </section>
  );
};

export default DetailPage;
