import "./About.css";
import AboutMeDesktop from "../../Components/Animated/Apear.gif";
import { useLanguage } from "../../localization/LanguageContext";

function About() {
  const { texts } = useLanguage();

  return (
    <div className="AboutMeContainer">
      <div className="DesktopGifContainer">
        <img src={AboutMeDesktop} className="DesktopGif" />
      </div>

      <div className="TextContainer">
        <h3>{texts.about.title}</h3>
        <p>
          {texts.about.paragraph1}
          <br />
          <br />
          {texts.about.paragraph2}
          <br />
          <br />
          {texts.about.paragraph3}
          <br />
          <br />
          {texts.about.paragraph4}
        </p>
      </div>
    </div>
  );
}

export default About;
