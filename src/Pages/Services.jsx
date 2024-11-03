import React from "react";
import Hero from "../components/Hero/Hero";

const Services = () => {
  return (
    <section id="services">
      <Hero image="barebr5.jpg" />
      <div className="about_text">
        <h2 className="about_text_h2">BARBER… BUT DIFFERENT</h2>
        <div className="background_about_text">
          <p className="about_text_p">
            Explore our extensive Service Menu below and be sure to find a
            solution to all your HAIR, SKIN & WELLBEING needs. UNOIT believes in
            a thorough consultation, all the while offering solutions to deliver
            the perfect outcomes for you. We also believe in educating our
            guests to manage their style & skin at home and make it as easy as
            possible for you to maintain your new look.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
