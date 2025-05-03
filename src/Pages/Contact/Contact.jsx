import "./Contact.css";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaItchIo } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Contact() {
  return (
    <div className="MainContactContainer">
      <h3>Contact</h3>
      <p>Feel free to contact us anytime, you can send us a mail to:</p>

      <div className="ContactContainer">
        <BiLogoGmail className="ContactIcon"></BiLogoGmail>
        <a href="mailto:cerpiondev@gmail.com" target="_blank">
          cerpiondev@gmail.com
        </a>
      </div>

      <p>Contact us through social media:</p>

      <div className="ContactContainer">
        <FaXTwitter className="ContactIcon"></FaXTwitter>
        <a href="https://x.com/CerpionX" target="_blank" p>
          Cerpion X Account
        </a>
      </div>

      <div className="ContactContainer">
        <FaInstagram className="ContactIcon"></FaInstagram>
        <a href="https://www.instagram.com/cerpiondev/" target="_blank">
          Cerpion Instagram Account
        </a>
      </div>

      <div className="ContactContainer">
        <FaItchIo className="ContactIcon"></FaItchIo>
        <a href="https://cerpion.itch.io/" target="_blank">
          Cerpion ItchIO Account
        </a>
      </div>
    </div>
  );
}

export default Contact;
