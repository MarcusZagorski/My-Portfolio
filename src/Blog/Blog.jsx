import "./Blog.css";

const Blog = ({ blogRef }) => {
  return (
    <section className="blog-container">
      <h1 className="blog">
        BLO<span>G</span>
      </h1>
      <h1 className="coming-soon" ref={blogRef}>
        COMING <span>SOON</span>...
      </h1>
    </section>
  );
};

export default Blog;
