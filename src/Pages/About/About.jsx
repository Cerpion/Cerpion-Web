import "./About.css";
import AboutMeDesktop from "../../assets/AboutMe/Apear.gif";
import CV from "../../assets/CV/CV.pdf";

import { useLanguage } from "../../localization/LanguageContext";

function About() {
  const { texts } = useLanguage();

  return (
    <div className="AboutMeContainer">
      <div className="DesktopGifContainer">
        <img
          src={AboutMeDesktop}
          className="DesktopGif"
          alt="Miguel Ángel Torres García"
        />
      </div>

      <div className="TextContainer">
        <h3>{texts.common.about.title}</h3>

        <p>
          {texts.common.about.paragraph1}
          <br />
          <br />
          {texts.common.about.paragraph2}
          <br />
          <br />
          {texts.common.about.paragraph3}
          <br />
          <br />
          {texts.common.about.paragraph4}
        </p>

        <div className="ProfessionalSummary">
          <p>{texts.common.about.summary}</p>

          <a href={CV} download className="CVButton">
            {texts.common.about.downloadCV}
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
