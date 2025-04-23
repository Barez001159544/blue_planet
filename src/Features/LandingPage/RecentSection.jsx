import "./Components/RecentSection.css";
import ex from "../../Assets/images/space_bg.jpg";

const blogs = [
  {
    id: 1,
    title: "Exploring the Stars",
    summary: "An introduction to stellar navigation and astrophysics.",
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentSection;
