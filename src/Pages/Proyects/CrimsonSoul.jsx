import "./CrimsonSoul.css";
import Logo from "../../assets/Projects/CrimsonSoul/Banner.png";
import PlayStore from "../../assets/Projects/CrimsonSoul/GooglePlayDownload.svg";

import Photo1 from "../../assets/Projects/CrimsonSoul/Icon.png";
import Photo2 from "../../assets/Projects/CrimsonSoul/Photo 2.webp";
import Photo3 from "../../assets/Projects/CrimsonSoul/Photo 3.webp";

const CrimsonSoul = () => {
  return (
    <div>
      <div className="Title">
        <h3>Crimson Soul</h3>
      </div>
      {/*
      <div className="Image">
        <img className="CerpionLogo" src={Logo} alt="Logo" />
      </div>

      
      <div className="GameVideoWrapper">
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          title="Crimson Soul Gameplay"
          allowFullScreen
        ></iframe>
      </div>
*/}

      <div className="Description">
        <p>Crimson soul is a fast action game with an upgrade rpg system.</p>

        <p>
          In a world plunged into darkness, the whole of humanity is doomed by
          an eternal eclipse. Infernal creatures emerge from the shadows,
          attracted by the power of the Dark Orb, a cursed relic that consumes
          souls to become more powerful.
        </p>

        <p>
          Searching for redemption. Years ago, the Orb's power was unleashed to
          save mankind from a terrible calamity.
        </p>
      </div>

      <div className="Features">
        <h3>Features.</h3>

        <p>Defeats enemies that are getting faster and faster</p>
        <p>Improves the skills of your warrior</p>
        <p>Try to be #1 in the world rankings</p>
      </div>

      <div className="Pictures">
        <h3>Photos.</h3>
        <div className="ImagesContainer">
          <img className="CerpionLogo" src={Photo1} alt="Logo" />
          <img className="CerpionLogo" src={Photo2} alt="Logo" />
          <img className="CerpionLogo" src={Photo3} alt="Logo" />
        </div>
      </div>

      <div className="DownloadLink">
        <h3>Download links.</h3>
        <a
          href="https://play.google.com/store/apps/details?id=com.cerpion.crimsonSoul" // ← reemplaza por tu link real
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="CerpionLogo"
            src={PlayStore}
            alt="Download on Google Play"
          />
        </a>
      </div>
    </div>
  );
};

export default CrimsonSoul;
