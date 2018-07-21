import React from "react";
import ContactForm from "./ContactForm";

const ContactView1 = () => (
  <div className="flex-parent">
    <style>
      {`
      #contact-view{
        width: 100%;
        vertical-align: middle;
      }
    `}
    </style>
    <div className="flex-child">
      <ContactForm />
    </div>
    <div className="flex-child">
      <img
        id="contact-view"
        src={require("./../../assets/images/contact/contact-view.png")}
      />
    </div>
    <hr className="bottom-line" />
  </div>
);

export default ContactView1;
