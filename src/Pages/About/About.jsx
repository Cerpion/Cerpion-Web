import "./About.css";
import AboutMeDesktop from "../../Components/Animated/Apear.gif";
import AboutMeMovil from "../../Components/Animated/About Me.gif";

function About() {
  return (
    <div className="AboutMeContainer">
      <div>
        <div className="MobileGifContainer">
          <img src={AboutMeMovil} className="MobileGif" />
        </div>

        <div className="DesktopGifContainer">
          <img src={AboutMeDesktop} className="DesktopGif" />
        </div>
      </div>

      <div className="TextContainer">
        <h3>About</h3>
        <div>
          <p>
            After many years learning and fighting against my own doubts, I
            decided to start creating my own games.
          </p>
          <p>
            My name is <span className="highlight">Cerpion</span>, I'm an indie
            developer who believes that a quiet experience, made with effort and
            love, can become something unique.
          </p>
          <p>
            It all started with a game I tried as a child, The name of this game
            is <span className="highlight">Final Fantasy IX </span>
            Seeing all the love and dedication that went into that world
            inspired me to want to do the same, to create something that conveys
            how beautiful this art can be.
          </p>
          <p>
            hope you will join me in this adventure, project by project, and
            discover with me new ways to create relaxing and unique experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
