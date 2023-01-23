import { useGeneral } from "../context/general.context";

export function ProjectModal({ open, toggleProjectCard }) {
  const { projectItem } = useGeneral();
  return (
    <div
      style={{ overflowY: "auto" }}
      class={`portfolio-popup ${open ? "open hide-scrolling" : ""}`}
    >
      <div class="pp-inner">
        <div class="pp-content">
          <div class="pp-header">
            <button
              type="button"
              class="btn pp-close"
              onClick={toggleProjectCard}
            >
              <i class="fa fa-times"></i>
            </button>
            <div class="pp-thumbnail">
              <img src={projectItem.img} alt="pp thumbail" />
            </div>
            <h3>{projectItem.title}</h3>
          </div>
          <div class="pp-body">
            {/* <div class="portfolio-item-details"> */}
            <div class="description">{projectItem.description}</div>
            <div class="general-info">
              <ul>
                <li>
                  Created - <span>{projectItem.createDate}</span>
                </li>
                <li>
                  technologies used - <span>{projectItem.tech}</span>
                </li>
                <li>
                  source code -{" "}
                  <span>
                    <a href={projectItem.githubLink} target="_blank">
                      GitHub Link
                    </a>
                  </span>
                </li>
                {projectItem.liveLink !== "" && (
                  <li>
                    view live -{" "}
                    <span>
                      <a href={projectItem.liveLink} target="_blank">
                        Live Project
                      </a>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
