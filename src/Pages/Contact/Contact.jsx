import "./Contact.css";

import { useLanguage } from "../../localization/LanguageContext";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaItchIo } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import ProfileImage from "../../assets/Foto.png";

function Contact() {
  const { texts } = useLanguage();

  return (
    <section className="ContactContainer">
      <div className="ContactInfo">
        <img src={ProfileImage} alt="Cerpion" className="ProfileImage" />

        <p className="ContactDescription">{texts.contact.description}</p>

        <div className="EmailContainer">
          <BiLogoGmail className="GmailIcon" />
          <a href="mailto:cerpiondev@gmail.com">cerpiondev@gmail.com</a>
        </div>
      </div>

      <form className="ContactForm">
        <div className="InputGroup">
          <label>{texts.contact.name}</label>
          <input type="text" placeholder={texts.contact.yourName} />
        </div>

        <div className="InputGroup">
          <label>{texts.contact.email}</label>
          <input type="email" placeholder={texts.contact.yourEmail} />
        </div>

        <div className="InputGroup FullWidth">
          <label>{texts.contact.subject}</label>
          <input type="text" placeholder={texts.contact.subject} />
        </div>

        <div className="InputGroup FullWidth">
          <label>{texts.contact.message}</label>

          <textarea rows="6" placeholder={texts.contact.yourSubject} />
        </div>

        <button type="submit" className="SendButton">
          {texts.contact.send}
        </button>
      </form>
    </section>
  );
}

export default Contact;
