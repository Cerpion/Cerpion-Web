import "./Home.css";
import { useNavigate } from "react-router-dom";
import CrimsonSoul from "../../Components/CrimsonSoul_adaptive_fore.png";
import { useLanguage } from "../../localization/LanguageContext";
import { projects } from "../../Data/projects";

const Home = () => {
  const navigate = useNavigate();
  const { texts } = useLanguage();

  return (
    <div className="HomeContainer">
      <h1>{texts.home.title}</h1>

      <p>{texts.home.description}</p>

      <div className="ProjectsContainer">
        {projects.map((project) => {
          const projectButton = project.buttons.find(
            (button) => button.type === "internal",
          );

          return (
            <button
              key={project.id}
              className="ProjectButton"
              onClick={() => navigate(projectButton.url)}
            >
              <img src={project.image} alt={project.translations.en.title} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
