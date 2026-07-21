import "./PanDeBonus.css";
import { useLanguage } from "../../localization/LanguageContext";

import CharacterViewer from "../../Components/CharacterViewer";

// =====================================================
// MODELS
// =====================================================

import Baker from "../../assets/Models/PandeBonus/Baker.glb?url";
import Customer from "../../assets/Models/PandeBonus/Customer.glb?url";

// =====================================================
// PLACEHOLDER IMAGES
// =====================================================

import Intro from "../../assets/Projects/PandeBonus/References/Intro.png";

import Project from "../../assets/Projects/PandeBonus/References/Project.png";
import Challenge from "../../assets/Projects/PandeBonus/References/Challenge.png";

import ArtProcess from "../../assets/Projects/PandeBonus/References/ArtProcess.png";

import Gameplay from "../../assets/Projects/PandeBonus/References/Gameplay.png";
import Orders from "../../assets/Projects/PandeBonus/References/Orders.png";

import VFX from "../../assets/Projects/PandeBonus/References/VFX.png";
import Animation from "../../assets/Projects/PandeBonus/References/Animation.png";

import EducationalGameplay from "../../assets/Projects/PandeBonus/References/EducationalGameplay.png";

import Final from "../../assets/Projects/PandeBonus/References/Final.png";

// =====================================================
// SOFTWARE ICONS
// =====================================================

import { SiUnity } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";

const PandeBonus = () => {
  const { texts } = useLanguage();

  const projectTexts = texts.projects["pan-de-bonus"];

  return (
    <main className="PandeBonus">
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
            <img src={Intro} alt="PandeBonus gameplay" />
          </div>
        </div>
      </section>

      {/* =====================================================
          2. SOFTWARE / TOOLS
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
            <SiBlender className="ToolIcon" />

            <span>Blender</span>
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
          <img src={Project} alt="PandeBonus educational game" />
        </div>
      </section>

      {/* =====================================================
          4. THE CHALLENGE
      ===================================================== */}

      <section className="ProjectSection ProjectChallenge">
        <div className="ProjectMedia">
          <img src={Challenge} alt="PandeBonus development" />
        </div>

        <div className="ProjectText">
          <span className="SectionLabel">{projectTexts.challenge.label}</span>

          <h2>{projectTexts.challenge.title}</h2>

          <p>{projectTexts.challenge.paragraph1}</p>

          <p>{projectTexts.challenge.paragraph2}</p>
        </div>
      </section>

      {/* =====================================================
          5. CHARACTER DEVELOPMENT
      ===================================================== */}

      <section className="ProjectCharacters">
        <div className="SectionHeader">
          <span>{projectTexts.characters.label}</span>

          <h2>{projectTexts.characters.title}</h2>
        </div>

        <div className="CharacterGrid">
          {/* =========================
              BAKER
          ========================== */}

          <article className="CharacterCard">
            <div className="CharacterViewerWrapper">
              <CharacterViewer
                character={Baker}
                pivotY={-0.5}
                cameraDistance={4}
              />
            </div>

            <div className="CharacterCardContent">
              <h3>{projectTexts.characters.baker.title}</h3>

              <p>{projectTexts.characters.baker.paragraph}</p>
            </div>
          </article>

          {/* =========================
              CUSTOMERS
          ========================== */}

          <article className="CharacterCard">
            <div className="CharacterViewerWrapper">
              <CharacterViewer
                character={Customer}
                pivotY={-0.5}
                cameraDistance={4}
              />
            </div>

            <div className="CharacterCardContent">
              <h3>{projectTexts.characters.customers.title}</h3>

              <p>{projectTexts.characters.customers.paragraph}</p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          6. ART PROCESS
      ===================================================== */}

      <section className="ProjectFeature ProjectFeatureReverse">
        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.artProcess.label}</span>

          <h2>{projectTexts.artProcess.title}</h2>

          <p>{projectTexts.artProcess.paragraph1}</p>

          <p>{projectTexts.artProcess.paragraph2}</p>
        </div>

        <div className="FeatureMedia">
          <img src={ArtProcess} alt="PandeBonus 3D art process" />
        </div>
      </section>

      {/* =====================================================
          7. GAMEPLAY SYSTEMS
      ===================================================== */}

      <section className="ProjectFeature">
        <div className="FeatureMedia">
          <img src={Gameplay} alt="PandeBonus gameplay systems" />
        </div>

        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.gameplay.label}</span>

          <h2>{projectTexts.gameplay.title}</h2>

          <p>{projectTexts.gameplay.paragraph1}</p>

          <p>{projectTexts.gameplay.paragraph2}</p>
        </div>
      </section>

      {/* =====================================================
          8. ORDERS AND GAMEPLAY LOOP
      ===================================================== */}

      <section className="ProjectProblem">
        <div className="ProblemHeader">
          <span className="SectionLabel">{projectTexts.orders.label}</span>

          <h2>{projectTexts.orders.title}</h2>
        </div>

        <div className="ProblemGrid">
          <div className="ProblemCard">
            <span className="ProblemNumber">01</span>

            <h3>{projectTexts.orders.request.title}</h3>

            <p>{projectTexts.orders.request.description}</p>

            <img src={Orders} alt="Customer order" />
          </div>

          <div className="ProblemCard">
            <span className="ProblemNumber">02</span>

            <h3>{projectTexts.orders.prepare.title}</h3>

            <p>{projectTexts.orders.prepare.description}</p>

            <img src={Gameplay} alt="Recipe preparation" />
          </div>

          <div className="ProblemCard">
            <span className="ProblemNumber">03</span>

            <h3>{projectTexts.orders.complete.title}</h3>

            <p>{projectTexts.orders.complete.description}</p>

            <img src={Final} alt="Completed order" />
          </div>
        </div>
      </section>

      {/* =====================================================
          9. VISUAL EFFECTS AND ANIMATION
      ===================================================== */}

      <section className="ProjectArchitecture">
        <div className="SectionHeader">
          <span>{projectTexts.visuals.label}</span>

          <h2>{projectTexts.visuals.title}</h2>
        </div>

        <div className="ArchitectureGrid">
          <article className="ArchitectureCard">
            <div className="ArchitectureMedia">
              <img src={VFX} alt="PandeBonus visual effects" />
            </div>

            <h3>{projectTexts.visuals.vfx.title}</h3>

            <p>{projectTexts.visuals.vfx.description}</p>
          </article>

          <article className="ArchitectureCard">
            <div className="ArchitectureMedia">
              <img src={Animation} alt="PandeBonus character animations" />
            </div>

            <h3>{projectTexts.visuals.animation.title}</h3>

            <p>{projectTexts.visuals.animation.description}</p>
          </article>
        </div>
      </section>

      {/* =====================================================
          10. EDUCATIONAL GAMEPLAY
      ===================================================== */}

      <section className="ProjectFeature ProjectFeatureReverse">
        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.educational.label}</span>

          <h2>{projectTexts.educational.title}</h2>

          <p>{projectTexts.educational.paragraph1}</p>

          <p>{projectTexts.educational.paragraph2}</p>
        </div>

        <div className="FeatureMedia">
          <img
            src={EducationalGameplay}
            alt="PandeBonus educational gameplay"
          />
        </div>
      </section>

      {/* =====================================================
          11. FINAL RESULT
      ===================================================== */}

      <section className="FinalResult">
        <div className="FinalResultMedia">
          <img src={Final} alt="Final PandeBonus gameplay" />
        </div>

        <div className="FinalResultText">
          <span className="SectionLabel">{projectTexts.finalResult.label}</span>

          <h2>{projectTexts.finalResult.title}</h2>

          <p>{projectTexts.finalResult.description}</p>
        </div>
      </section>

      {/* =====================================================
          12. WHAT I LEARNED
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
          13. GALLERY
      ===================================================== */}

      <section className="ProjectGallery">
        <div className="SectionHeader">
          <span>{projectTexts.gallery.label}</span>

          <h2>{projectTexts.gallery.title}</h2>
        </div>

        <div className="GalleryGrid">
          <img src={Project} alt="PandeBonus screenshot" />

          <img src={Gameplay} alt="PandeBonus gameplay" />

          <img src={Final} alt="PandeBonus final result" />
        </div>
      </section>
    </main>
  );
};

export default PandeBonus;
