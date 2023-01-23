import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { useGeneral } from "../context/general.context";
import { projectData } from "../data/projects";

export function Projects() {
  const [open, setOpen] = useState(false);
  const { nav, setNav } = useGeneral();

  useEffect(() => {
    setNav(false)
  }, [])
  

  const toggleProjectCard = () => {
    setOpen(!open);
    document.body.classList.toggle("hide-scrolling");
  };

  return (
    <div class={``}>
      <div class={`main ${open ? "fade-out " : ""}`}>
        <Navbar nav={nav} setNav={setNav} />
        <section
          class={`portfolio-section sec-padding ${nav ? "fade-out" : ""}`}
        >
          <div class="container">
            <div class="row">
              <div class="section-title">
                <h2>Projects</h2>
              </div>
            </div>
            <div class="row">
              {projectData.map((project, ind) => (
                <ProjectCard
                  key={ind}
                  project={project}
                  toggleProjectCard={toggleProjectCard}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <ProjectModal open={open} toggleProjectCard={toggleProjectCard} />
    </div>
  );
}
