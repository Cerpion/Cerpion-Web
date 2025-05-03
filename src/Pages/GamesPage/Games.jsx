import "./Games.css";
import CrimsonSoulBanner from "../../Components/Games/CrimsonSoul/Banner.png";
import GameBanner from "./Banner/GameBanner";

function Games() {
  return (
    <div className="BannerContainer">
      <GameBanner
        imageUrl={CrimsonSoulBanner}
        navigateTo="/CrimsonSoul"
        text="Fast-paced action RPG and progression. In a world plunged into darkness."
      />
    </div>
  );
}

export default Games;
