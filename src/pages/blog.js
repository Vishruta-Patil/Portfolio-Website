import { useEffect } from "react";
import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/Navbar";
import { useGeneral } from "../context/general.context";
import { blogData } from "../data/blog";

export function Blog() {
  const {nav, setNav} = useGeneral()
  useEffect(() => {
    setNav(false)
  }, [])

  return (
    <div class="main">
      <Navbar nav={nav} setNav={setNav}/>
      <section class={`blog-section sec-padding ${nav ? "fade-out" : ""}`}>   
        <div class="container">
          <div class="row">
            <div class="section-title">
              <h2>Blogs</h2>
            </div>
          </div>
          <div class="row">
            {blogData.map((blog,ind) => (
              <BlogCard key={ind} blog={blog}/>
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
}
