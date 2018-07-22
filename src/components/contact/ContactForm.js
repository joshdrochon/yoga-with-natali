import React from "react";
import "./../../App.css";

const ContactForm = () => (
  <form id="contact-form">
    <input type="text" id="name" placeholder="Name" required />
    <input type="text" id="location" placeholder="Email" required />
    <textarea id="comment" placeholder="Comment" required />
    <button className="btn-default" type="submit">
      Submit
    </button>
  </form>
);

export default ContactForm;
