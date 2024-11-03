import React from "react";
import Hero from "../components/Hero/Hero";

const Contact = () => {
  return (
    <section id="contact">
      <Hero image="httpswww.unoit.com.au.jpg" />
      <div className="about_text">
        <h2 className="about_text_h2">[YOU - KNOW - IT]</h2>
        <div className="background_about_text">
          <p className="about_text_p">
            99 CROWN STREET, Darlinghurst, SYDNEY NSW, 2010
          </p>
          <p className="about_text_p">Tel- 912345678</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
