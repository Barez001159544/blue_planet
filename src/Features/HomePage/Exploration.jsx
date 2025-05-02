import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./Components/Exploration.css";

import explore1 from "../../Assets/Images/explore_test/explore1.jpg";
import explore2 from "../../Assets/Images/explore_test/explore2.jpg";
import explore3 from "../../Assets/Images/explore_test/explore3.jpg";
import explore4 from "../../Assets/Images/explore_test/explore4.jpeg";
import explore5 from "../../Assets/Images/explore_test/explore5.jpg";
import explore6 from "../../Assets/Images/explore_test/explore6.jpg";
import explore7 from "../../Assets/Images/explore_test/explore7.jpeg";
import explore8 from "../../Assets/Images/explore_test/explore8.jpg";
import explore9 from "../../Assets/Images/explore_test/explore9.jpg";

const images = [
  explore1,
  explore2,
  explore3,
  explore4,
  explore5,
  explore6,
  explore7,
  explore8,
  explore9,
];

const Exploration = () => {
  return (
    <div className="exploration-gallery">
      <ResponsiveMasonry 
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
      gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
      >
        <Masonry gutter="40px" style={{gap: "20px"}}>
          {images.map((img, i) => (
            <img
              className="gallery-img"
              key={i}
              src={img}
              alt={`Gallery ${i}`}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Exploration;
