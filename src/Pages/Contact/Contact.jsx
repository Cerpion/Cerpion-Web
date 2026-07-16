import "./Contact.css";

import { useLanguage } from "../../localization/LanguageContext";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaItchIo } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import ProfileImage from "../../assets/AboutMe/Foto.png";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const { texts } = useLanguage();
  const [state, handleSubmit] = useForm("xpqvqnej");

  return (
    <section className="ContactContainer">
      <div className="ContactInfo">
        <img src={ProfileImage} alt="Cerpion" className="ProfileImage" />

        <p className="ContactDescription">{texts.contact.description}</p>

        <div
          className="EmailContainer"
          onClick={() => navigator.clipboard.writeText("cerpiondev@gmail.com")}
        >
          <BiLogoGmail className="GmailIcon" />
          <span>cerpiondev@gmail.com</span>
        </div>
      </div>

      <form className="ContactForm" onSubmit={handleSubmit}>
        <div className="InputGroup">
          <label>{texts.contact.name}</label>
          <input
            type="text"
            name="name"
            placeholder={texts.contact.yourName}
            required
          />
        </div>

        <div className="InputGroup">
          <label>{texts.contact.email}</label>
          <input
            type="email"
            name="email"
            placeholder={texts.contact.yourEmail}
            required
          />
        </div>

        <div className="InputGroup FullWidth">
          <label>{texts.contact.subject}</label>
          <input
            type="text"
            name="subject"
            placeholder={texts.contact.subject}
            required
          />
        </div>

        <div className="InputGroup FullWidth">
          <label>{texts.contact.message}</label>

          <textarea
            rows="6"
            name="message"
            placeholder={texts.contact.yourSubject}
            required
          />
        </div>

        <button
          type="submit"
          className="SendButton"
          disabled={state.submitting}
        >
          {state.submitting ? texts.contact.sending : texts.contact.send}
        </button>

        {state.succeeded && (
          <p className="SuccessMessage">{texts.contact.success}</p>
        )}

        {state.errors?.length > 0 && (
          <p className="ErrorMessage">{texts.contact.error}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
