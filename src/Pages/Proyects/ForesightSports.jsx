import "./ForesightSports.css";
import { useLanguage } from "../../localization/LanguageContext";

// =====================================================
// PLACEHOLDER IMAGES
// =====================================================

import Intro from "../../assets/Projects/ForesightSports/References/Intro.png";

import Project from "../../assets/Projects/ForesightSports/References/Project.png";
import Challenge from "../../assets/Projects/ForesightSports/References/Challenge.png";

import Leaderboard from "../../assets/Projects/ForesightSports/References/Leaderboard.png";
import ShotStatistics from "../../assets/Projects/ForesightSports/References/ShotStatistics.png";

import ClubSystem from "../../assets/Projects/ForesightSports/References/ClubSystem.png";

import GC3Configuration from "../../assets/Projects/ForesightSports/References/GC3Configuration.png";

import Multiplayer from "../../assets/Projects/ForesightSports/References/Multiplayer.png";

import Final from "../../assets/Projects/ForesightSports/References/Final.png";

// =====================================================
// SOFTWARE ICONS
// =====================================================

import { SiUnity } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";

const ForesightSports = () => {
  const { texts } = useLanguage();

  const projectTexts = texts.projects["foresight-sports"];

  return (
    <main className="ForesightSports">
      {/* =====================================================
          1. HERO
      ===================================================== */}

      <section className="ProjectHero">
        <div className="ProjectHeroContent">
          <div className="ProjectHeroText">
            <span className="ProjectEyebrow">{projectTexts.hero.eyebrow}</span>

            <h1>{projectTexts.hero.title}</h1>

            <p>{projectTexts.hero.description}</p>
          </div>

          <div className="ProjectHeroMedia">
            <img src={Intro} alt="ForesightSports golf simulator interface" />
          </div>
        </div>
      </section>

      {/* =====================================================
          2. TOOLS
      ===================================================== */}

      <section className="ProjectTools">
        <div className="SectionHeader">
          <span>{projectTexts.tools.label}</span>

          <h2>{projectTexts.tools.title}</h2>
        </div>

        <div className="ToolsGrid">
          <div className="ToolCard">
            <SiUnity className="ToolIcon" />
            <span>Unity</span>
          </div>

          <div className="ToolCard">
            <PiFileCSharp className="ToolIcon" />
            <span>C#</span>
          </div>

          <div className="ToolCard">
            <span className="ToolTextIcon">XAML</span>
            <span>NoesisGUI</span>
          </div>

          <div className="ToolCard">
            <SiGit className="ToolIcon" />
            <span>Git</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. THE PROJECT
      ===================================================== */}

      <section className="ProjectSection ProjectIntro">
        <div className="ProjectText">
          <span className="SectionLabel">{projectTexts.project.label}</span>

          <h2>{projectTexts.project.title}</h2>

          <p>{projectTexts.project.paragraph1}</p>

          <p>{projectTexts.project.paragraph2}</p>
        </div>

        <div className="ProjectMedia">
          <img src={Project} alt="ForesightSports project" />
        </div>
      </section>

      {/* =====================================================
          4. THE CHALLENGE
      ===================================================== */}

      <section className="ProjectSection ProjectChallenge">
        <div className="ProjectMedia">
          <img src={Challenge} alt="NoesisGUI and MVVM architecture" />
        </div>

        <div className="ProjectText">
          <span className="SectionLabel">{projectTexts.challenge.label}</span>

          <h2>{projectTexts.challenge.title}</h2>

          <p>{projectTexts.challenge.paragraph1}</p>

          <p>{projectTexts.challenge.paragraph2}</p>
        </div>
      </section>

      {/* =====================================================
          5. LEADERBOARD & SHOT STATISTICS
      ===================================================== */}

      <section className="ProjectProblem">
        <div className="ProblemHeader">
          <span className="SectionLabel">
            {projectTexts.leaderboards.label}
          </span>

          <h2>{projectTexts.leaderboards.title}</h2>
        </div>

        <div className="ProblemGrid">
          <div className="ProblemCard">
            <span className="ProblemNumber">01</span>

            <h3>{projectTexts.leaderboards.leaderboard.title}</h3>

            <p>{projectTexts.leaderboards.leaderboard.description}</p>

            <img src={Leaderboard} alt="Leaderboard interface" />
          </div>

          <div className="ProblemCard">
            <span className="ProblemNumber">02</span>

            <h3>{projectTexts.leaderboards.statistics.title}</h3>

            <p>{projectTexts.leaderboards.statistics.description}</p>

            <img src={ShotStatistics} alt="Shot statistics interface" />
          </div>
        </div>
      </section>

      {/* =====================================================
          6. CLUB SYSTEM
      ===================================================== */}

      <section className="ProjectFeature">
        <div className="FeatureMedia">
          <img src={ClubSystem} alt="Golf club system interface" />
        </div>

        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.clubSystem.label}</span>

          <h2>{projectTexts.clubSystem.title}</h2>

          <p>{projectTexts.clubSystem.paragraph1}</p>

          <p>{projectTexts.clubSystem.paragraph2}</p>
        </div>
      </section>

      {/* =====================================================
          7. GC3 CONFIGURATION
      ===================================================== */}

      <section className="ProjectFeature ProjectFeatureReverse">
        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.gc3.label}</span>

          <h2>{projectTexts.gc3.title}</h2>

          <p>{projectTexts.gc3.paragraph1}</p>

          <p>{projectTexts.gc3.paragraph2}</p>
        </div>

        <div className="FeatureMedia">
          <img src={GC3Configuration} alt="GC3 configuration interface" />
        </div>
      </section>

      {/* =====================================================
          8. MULTIPLAYER
      ===================================================== */}

      <section className="ProjectFeature">
        <div className="FeatureMedia">
          <img src={Multiplayer} alt="Multiplayer interface" />
        </div>

        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.multiplayer.label}</span>

          <h2>{projectTexts.multiplayer.title}</h2>

          <p>{projectTexts.multiplayer.paragraph1}</p>

          <p>{projectTexts.multiplayer.paragraph2}</p>
        </div>
      </section>

      {/* =====================================================
          9. FINAL RESULT
      ===================================================== */}

      <section className="FinalResult">
        <div className="FinalResultMedia">
          <img src={Final} alt="ForesightSports final interface" />
        </div>

        <div className="FinalResultText">
          <span className="SectionLabel">{projectTexts.finalResult.label}</span>

          <h2>{projectTexts.finalResult.title}</h2>

          <p>{projectTexts.finalResult.description}</p>
        </div>
      </section>

      {/* =====================================================
          10. WHAT I LEARNED
      ===================================================== */}

      <section className="ProjectLearnings">
        <div className="SectionHeader">
          <span>{projectTexts.learnings.label}</span>

          <h2>{projectTexts.learnings.title}</h2>
        </div>

        <div className="LearningTags">
          {projectTexts.learnings.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <p className="LearningConclusion">
          {projectTexts.learnings.conclusion}
        </p>
      </section>

      {/* =====================================================
          11. GALLERY
      ===================================================== */}

      <section className="ProjectGallery">
        <div className="SectionHeader">
          <span>{projectTexts.gallery.label}</span>

          <h2>{projectTexts.gallery.title}</h2>
        </div>

        <div className="GalleryGrid">
          <img src={Leaderboard} alt="ForesightSports screenshot" />

          <img src={GC3Configuration} alt="ForesightSports screenshot" />

          <img src={Multiplayer} alt="ForesightSports screenshot" />
        </div>
      </section>
    </main>
  );
};

export default ForesightSports;
