import { useState } from "react";
import { projects } from "../../Data/projects";
import "./Games.css";
import Thumbnail from "../../Components/Games/CrimsonSoul/Banner.png";
import { useLanguage } from "../../localization/LanguageContext";
import { useNavigate } from "react-router-dom";

function Games() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="ProjectsPage">
      <div className="ProjectViewer">
        <div className="ProjectHeader">
          <h2>{selectedProject.translations.en.title}</h2>

          <div className="Tags">
            {selectedProject.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="ProjectContent">
          <div className="VideoContainer">
            <iframe
              src={selectedProject.youtube}
              title={selectedProject.translations.en.title}
              allowFullScreen
            />
          </div>

          <div className="ProjectInfo">
            <h3>Description</h3>

            <p>{selectedProject.translations[language].description}</p>

            <div className="Highlights">
              {selectedProject.translations[language].highlights.map(
                (highlight, index) => (
                  <p key={index}>• {highlight}</p>
                ),
              )}
            </div>

            <div className="ProjectButtons">
              {selectedProject.buttons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => {
                    if (button.type === "internal") {
                      // Más adelante aquí irá navigate()
                      navigate(button.url);
                    } else {
                      window.open(button.url, "_blank");
                    }
                  }}
                >
                  {button.text[language]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectsList">
        {projects.map((project) => (
          <button
            key={project.id}
            className={
              selectedProject.id === project.id
                ? "ProjectCard Active"
                : "ProjectCard"
            }
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.translations[language].title}
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Games;
