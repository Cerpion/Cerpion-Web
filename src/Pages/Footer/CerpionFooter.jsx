import './CerpionFooter.css';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaItchIo } from "react-icons/fa";

function CerpionFooter() {

  return (

<div className="FooterContainer">

    <div className='Social'>

        <button onClick={() => window.open('https://www.instagram.com/cerpiondev/', '_blank')}><FaInstagram className='SocialIcon'/></button>
        <button onClick={() => window.open('https://x.com/CerpionX', '_blank')}><FaXTwitter className='SocialIcon'/></button>
        <button onClick={() => window.open('https://cerpion.itch.io/', '_blank')}><FaItchIo className='SocialIcon'/></button>
        <button onClick={() => window.open('https://www.tiktok.com/@cerpiondev?lang=es-419', '_blank')}><FaTiktok className='SocialIcon'/></button>
        <button onClick={() => window.open('https://www.youtube.com/@CerpionDev', '_blank')}><IoLogoYoutube className='SocialIcon'/></button>

    </div>

        <footer>© Cerpion - 2025</footer>
    </div>
  );
}

export default CerpionFooter;