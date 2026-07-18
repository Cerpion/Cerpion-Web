import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../localization/LanguageContext";
import { projects } from "../../Data/projects";

const Home = () => {
  const navigate = useNavigate();
  const { texts } = useLanguage();

  return (
    <div className="HomeContainer">
      <h1>{texts.common.home.title}</h1>

      <p>{texts.common.home.description}</p>

      <div className="ProjectsContainer">
        {projects.map((project) => {
          const projectTexts = texts.projects[project.id];

          const projectButton = project.buttons.find(
            (button) => button.id === "viewProject",
          );

          return (
            <button
              key={project.id}
              className="ProjectButton"
              onClick={() => navigate(projectButton.url)}
            >
              <img src={project.image} alt={projectTexts.title} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
