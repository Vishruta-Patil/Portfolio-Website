import { Route, Routes } from "react-router-dom";
import { About } from "../pages/about";
import { Blog } from "../pages/blog";
import { Contact } from "../pages/contact";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
