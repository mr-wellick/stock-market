import React from "react";
import { Logo } from "../../Components/Logo/";
import "./style.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="card contact-container">
        <Logo />
        <form className="contact-form" name="contact" method="POST" data-netlify="true">
          <div className="input-field">
            <input placeholder="Email" type="email" name="email" className="validate" required />
          </div>
          <div className="input-field">
            <textarea
              className="materialize-textarea"
              name="message"
              id="contact-textarea"
              placeholder="Message"
              required
            />
          </div>
          <button className="contact-button btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
