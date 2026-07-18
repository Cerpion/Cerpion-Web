import "./CrimsonSoul.css";
import { useLanguage } from "../../localization/LanguageContext";

import PlayStore from "../../assets/Projects/CrimsonSoul/GooglePlayDownload.svg";

import CharacterViewer from "../../Components/CharacterViewer";

import SwordMan from "../../assets/Models/CrimsonSoul/SwordMan.glb?url";
import Skull from "../../assets/Models/CrimsonSoul/Skull.glb?url";

// =====================================================
// PLACEHOLDER IMAGES
// =====================================================

import PhotoPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/CharacterProcess.png";
import CodePlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/CharacterProcess.png";

import Prototype3DPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/Prototype3D.gif";

import PerformanceProblemPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/PerformanceProblem.gif";

import CharacterProcessPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/CharacterProcess.png";

import SpriteConversionPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/3DTo2D.gif";

import EventSystemPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/EventSystem.png";

import ObjectPoolPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/ObjectPool.png";

import DynamicMusicPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/DynamicMusic.png";

import UIDesignPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/UIDesign.png";

import UpgradeSystemPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/Upgrades.gif";

import AdMobPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/AdMob.gif";

import LeaderboardPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/Leaderboard.png";

import FinalGameplayPlaceholder from "../../assets/Projects/CrimsonSoul/Placeholders/FinalGameplay.gif";

// =====================================================
// SOFTWARE ICONS
// =====================================================

import { SiGodotengine } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { SiInkscape } from "react-icons/si";
import { SiAndroid } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { PiWaveform } from "react-icons/pi";

const CrimsonSoul = () => {
  const { texts } = useLanguage();
  const projectTexts = texts.projects["crimson-soul"];

  return (
    <main className="CrimsonSoul">
      {/* =====================================================
          1. HERO
      ===================================================== */}

      <section className="ProjectHero">
        <div className="ProjectHeroContent">
          <div className="ProjectHeroText">
            <span className="ProjectEyebrow">{projectTexts.hero.eyebrow}</span>

            <h1> {projectTexts.hero.title}</h1>

            <p>{projectTexts.hero.description}</p>

            <div className="ProjectButtons">
              <a
                href="https://play.google.com/store/apps/details?id=com.cerpion.crimsonSoul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PlayStore} alt="Download on Google Play" />
              </a>
            </div>
          </div>

          <div className="ProjectHeroMedia">
            <img src={FinalGameplayPlaceholder} alt="Crimson Soul gameplay" />
          </div>
        </div>
      </section>

      {/* =====================================================
          2. SOFTWARE / TOOLS
      ===================================================== */}

      <section className="ProjectTools">
        <div className="SectionHeader">
          <span> {projectTexts.tools.label}</span>

          <h2>{projectTexts.tools.title}</h2>
        </div>

        <div className="ToolsGrid">
          <div className="ToolCard">
            <SiGodotengine className="ToolIcon" />
            <span>Godot 4</span>
          </div>

          <div className="ToolCard">
            <TbBrandCSharp className="ToolIcon" />
            <span>C#</span>
          </div>

          <div className="ToolCard">
            <SiBlender className="ToolIcon" />
            <span>Blender</span>
          </div>

          <div className="ToolCard">
            <PiWaveform className="ToolIcon" />
            <span>Waveform 13</span>
          </div>

          <div className="ToolCard">
            <SiInkscape className="ToolIcon" />
            <span>Inkscape</span>
          </div>

          <div className="ToolCard">
            <SiAndroid className="ToolIcon" />
            <span>Android</span>
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
          <img src={PhotoPlaceholder} alt="Crimson Soul project" />
        </div>
      </section>

      {/* =====================================================
          4. THE CHALLENGE
      ===================================================== */}

      <section className="ProjectSection ProjectChallenge">
        <div className="ProjectMedia">
          <img src={CodePlaceholder} alt="C# architecture in Godot" />
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
          <article className="CharacterCard">
            <div className="CharacterViewerWrapper">
              <CharacterViewer
                character={SwordMan}
                pivotY={-0.5}
                cameraDistance={4}
              />
            </div>

            <div className="CharacterCardContent">
              <h3>{projectTexts.characters.warrior.title}</h3>
              <p>{projectTexts.characters.warrior.paragraph}</p>
            </div>
          </article>

          <article className="CharacterCard">
            <div className="CharacterViewerWrapper">
              <CharacterViewer
                character={Skull}
                pivotY={-0.5}
                cameraDistance={4}
              />
            </div>

            <div className="CharacterCardContent">
              <h3>{projectTexts.characters.skulls.title}</h3>
              <p>{projectTexts.characters.skulls.paragraph1}</p>
              <p>{projectTexts.characters.skulls.paragraph2}</p>
            </div>
          </article>
        </div>

        <div className="ProcessMedia">
          <img
            src={CharacterProcessPlaceholder}
            alt="Character development process"
          />
        </div>
      </section>

      {/* =====================================================
          6. FIRST 3D PROTOTYPE
      ===================================================== */}

      <section className="ProjectFeature">
        <div className="FeatureMedia">
          <img src={Prototype3DPlaceholder} alt="Crimson Soul 3D prototype" />
        </div>

        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.prototype.label}</span>
          <h2>{projectTexts.prototype.title}</h2>
          <p>{projectTexts.prototype.paragraph1}</p>
          <p>{projectTexts.prototype.paragraph2}</p>
        </div>
      </section>

      {/* =====================================================
          7. PERFORMANCE PROBLEM
      ===================================================== */}

      <section className="ProjectProblem">
        <div className="ProblemHeader">
          <span className="SectionLabel">{projectTexts.performance.label}</span>

          <h2>{projectTexts.performance.title}</h2>
        </div>

        <div className="ProblemGrid">
          <div className="ProblemCard">
            <span className="ProblemNumber">
              {projectTexts.performance.problem.number}
            </span>

            <h3>{projectTexts.performance.problem.title}</h3>
            <p>{projectTexts.performance.problem.description}</p>

            <img
              src={PerformanceProblemPlaceholder}
              alt="Performance problem"
            />
          </div>

          <div className="ProblemCard">
            <span className="ProblemNumber">
              {projectTexts.performance.investigation.number}
            </span>

            <h3>{projectTexts.performance.investigation.title}</h3>
            <p>{projectTexts.performance.investigation.description}</p>

            <img src={ObjectPoolPlaceholder} alt="Object Pool" />
          </div>

          <div className="ProblemCard">
            <span className="ProblemNumber">
              {projectTexts.performance.discovery.number}
            </span>

            <h3>{projectTexts.performance.discovery.title}</h3>
            <p>{projectTexts.performance.discovery.description}</p>
          </div>
        </div>
      </section>

      {/* =====================================================
          8. 3D TO 2D
      ===================================================== */}

      <section className="ProjectFeature ProjectFeatureReverse">
        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.strategy.label}</span>

          <h2>{projectTexts.strategy.title}</h2>
          <p>{projectTexts.strategy.paragraph1}</p>
          <p>{projectTexts.strategy.paragraph2}</p>
          <p>{projectTexts.strategy.paragraph3}</p>
        </div>

        <div className="FeatureMedia">
          <img
            src={SpriteConversionPlaceholder}
            alt="3D to 2D sprite conversion"
          />
        </div>
      </section>

      {/* =====================================================
          9. ARCHITECTURE
      ===================================================== */}

      <section className="ProjectArchitecture">
        <div className="SectionHeader">
          <span>{projectTexts.architecture.label}</span>

          <h2>{projectTexts.architecture.title}</h2>
        </div>

        <div className="ArchitectureGrid">
          <article className="ArchitectureCard">
            <div className="ArchitectureMedia">
              <img src={EventSystemPlaceholder} alt="Event System" />
            </div>

            <h3>{projectTexts.architecture.eventSystem.title}</h3>
            <p>{projectTexts.architecture.eventSystem.description}</p>
          </article>

          <article className="ArchitectureCard">
            <div className="ArchitectureMedia">
              <img src={ObjectPoolPlaceholder} alt="Object Pool" />
            </div>

            <h3>{projectTexts.architecture.objectPool.title}</h3>
            <p>{projectTexts.architecture.objectPool.description}</p>
          </article>
        </div>
      </section>

      {/* =====================================================
          10. DYNAMIC MUSIC
      ===================================================== */}

      <section className="ProjectFeature">
        <div className="FeatureMedia">
          <img src={DynamicMusicPlaceholder} alt="Dynamic music system" />
        </div>

        <div className="FeatureText">
          <span className="SectionLabel">{projectTexts.music.label}</span>
          <h2>{projectTexts.music.title}</h2>
          <p>{projectTexts.music.paragraph1}</p>
          <p>{projectTexts.music.paragraph2}</p>
          <p>{projectTexts.music.paragraph3}</p>
        </div>
      </section>

      {/* =====================================================
          11. UI DESIGN
      ===================================================== */}

      <section className="ProjectUI">
        <div className="UIIntro">
          <span className="SectionLabel">{projectTexts.ui.label}</span>

          <h2>{projectTexts.ui.title}</h2>

          <p>{projectTexts.ui.paragraph1}</p>

          <p>{projectTexts.ui.paragraph2}</p>
        </div>

        <div className="UIComparison">
          <div className="UIComparisonItem">
            <span> {projectTexts.ui.designLabel}</span>

            <img src={UIDesignPlaceholder} alt="UI design" />
          </div>

          <div className="UIComparisonItem">
            <span>{projectTexts.ui.implementationLabel}</span>

            <img src={UIDesignPlaceholder} alt="UI implementation" />
          </div>
        </div>
      </section>

      {/* =====================================================
          12. GAMEPLAY LOOP
      ===================================================== */}

      <section className="ProjectFeature ProjectFeatureReverse">
        <div className="FeatureText">
          <span className="SectionLabel">
            {projectTexts.gameplayLoop.label}
          </span>

          <h2>{projectTexts.gameplayLoop.title}</h2>

          <p>{projectTexts.gameplayLoop.description}</p>

          <div className="GameplayLoop">
            <span>{projectTexts.gameplayLoop.steps.combat}</span>
            <span>{projectTexts.gameplayLoop.steps.progress}</span>
            <span>{projectTexts.gameplayLoop.steps.upgrade}</span>
            <span>{projectTexts.gameplayLoop.steps.repeat}</span>
          </div>
        </div>

        <div className="FeatureMedia">
          <img src={UpgradeSystemPlaceholder} alt="Upgrade system" />
        </div>
      </section>

      {/* =====================================================
          13. ADMOB
      ===================================================== */}

      <section className="ProjectProblem">
        <div className="ProblemHeader">
          <span className="SectionLabel">
            {projectTexts.integrations.label}
          </span>

          <h2>{projectTexts.integrations.title}</h2>
        </div>

        <div className="IntegrationGrid">
          <div className="IntegrationCard">
            <h3>{projectTexts.integrations.admob.title}</h3>
            <p>{projectTexts.integrations.admob.description}</p>

            <img src={AdMobPlaceholder} alt="Google AdMob integration" />
          </div>

          <div className="IntegrationCard">
            <h3>{projectTexts.integrations.leaderboards.title}</h3>
            <p>{projectTexts.integrations.leaderboards.description}</p>
            <img src={LeaderboardPlaceholder} alt="Global leaderboard" />
          </div>
        </div>
      </section>

      {/* =====================================================
          14. FINAL RESULT
      ===================================================== */}

      <section className="FinalResult">
        <div className="FinalResultMedia">
          <img
            src={FinalGameplayPlaceholder}
            alt="Final Crimson Soul gameplay"
          />
        </div>

        <div className="FinalResultText">
          <span className="SectionLabel">{projectTexts.finalResult.label}</span>
          <h2>{projectTexts.finalResult.title}</h2>
          <p>{projectTexts.finalResult.description}</p>
        </div>
      </section>

      {/* =====================================================
          15. WHAT I LEARNED
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
          16. GALLERY
      ===================================================== */}

      <section className="ProjectGallery">
        <div className="SectionHeader">
          <span>{projectTexts.gallery.label}</span>

          <h2>{projectTexts.gallery.title}</h2>
        </div>

        <div className="GalleryGrid">
          <img src={CodePlaceholder} alt="Crimson Soul screenshot" />

          <img src={CodePlaceholder} alt="Crimson Soul screenshot" />

          <img src={CodePlaceholder} alt="Crimson Soul screenshot" />
        </div>
      </section>
    </main>
  );
};

export default CrimsonSoul;
