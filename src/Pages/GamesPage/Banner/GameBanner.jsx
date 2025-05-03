import './GameBanner.css';
import { NavLink } from 'react-router-dom';

const GameBanner = ({ imageUrl, navigateTo, text }) => {

    return (
      <NavLink to={navigateTo} className="banner-link">
      <div className="banner-container">
        <div className="banner-clickable" >
          <img src={imageUrl} alt="Banner" className="banner-image" />
        </div>
        <p className="banner-text">{text}</p>
      </div>
      </NavLink>
    );
  };

export default GameBanner;