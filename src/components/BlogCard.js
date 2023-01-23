export function BlogCard({ blog }) {
  return (
    <div class="blog-item">
      <div class="blog-item-thumbnail">
        <img src={blog.img} alt={blog.title} />
      </div>
      <h3 class="blog-item-title">{blog.title}</h3>
      <button type="button" class="btn">
        <a href={blog.link} target="_blank">
          View blog
        </a>
      </button>
    </div>
  );
}
