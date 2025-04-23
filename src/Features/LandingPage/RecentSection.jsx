import "./Components/RecentSection.css";
import ex from "../../Assets/images/space_bg.jpg";
import PrimaryButton from "../../Utils/PrimaryButton/PrimaryButton";

const blogs = [
  {
    id: 1,
    title: "Exploring the Stars",
    summary:
      "Embark on a journey through the cosmos—explore distant galaxies, uncover space mysteries, and be part of humanity’s stellar future. Embark on a journey through the cosmos—explore distant galaxies.",
    image: ex,
  },
  {
    id: 2,
    title: "Life on Mars?",
    summary: "Could humans ever inhabit the red planet?",
    image: ex,
  },
];

const RecentSection = () => {
  return (
    <section className="recent-container">
      <h1>Recent Blogs</h1>
      <div className="blogs">
        {blogs.map((blog) => (
          <article className="blog-item">
            <img src={blog.image} alt="" />
            <div className="blog-content">
              <div className="blog-heading">
                <h6>01/05</h6>
                <div className="blog-heading-line"></div>
              </div>
              <h2>{blog.title}</h2>
              <p>{blog.summary}</p>
              <PrimaryButton label={"Explore"} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentSection;
