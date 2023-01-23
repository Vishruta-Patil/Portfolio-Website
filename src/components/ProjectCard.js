import { useGeneral } from "../context/general.context";

export function ProjectCard({ project, toggleProjectCard }) {
  const {setProjectItem} = useGeneral()
  const projectCardHandler = () => {
    toggleProjectCard()
    setProjectItem(project)
  }
  return (
    <div class="portfolio-item">
        <div class="portfolio-item-thumbnail">
          <img src={project.img} alt={project.title} />
        </div>
        <p class="portfolio-item-title">{project.title}</p>
        <button
          type="button"
          class="btn view-project-btn"
          onClick={projectCardHandler}
        >
          view project
        </button>
        <div class="portfolio-item-details">
          <div class="description">{project.description}</div>
          <div class="general-info">
            <ul>
              <li>
                Created - <span>{project.createData}</span>
              </li>
              <li>
                technologies used - <span>{project.tech}</span>
              </li>
              <li>
                source code -{" "}
                <span>
                  <a href={project.githubLink} target="_blank">
                    GitHub Link
                  </a>
                </span>
              </li>
              <li>
                view live -{" "}
                <span>
                  <a href={project.liveLink} target="_blank">
                    Live Project
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}
