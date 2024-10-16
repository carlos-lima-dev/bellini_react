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
            UNOIT has taken the barber experience and elevated it at every step.
            From thorough consultations, to an unrivalled service menu including
            total colour, keratin smoothing, straightening services and hair
            detox treatments. Enjoy an award winning haircut while sipping on
            your freshly made cocktail [or anything else form the epic
            refreshments menu]. Every haircut includes a scalp and back massage
            in lay down lounges, complete with a hot towel to truly relax you!
            Complete your look by exploring the UNOIT-ALL Skin + Wellbeing team.
            A passionate team specially curated to offer you beauty, aesthetics,
            laser hair removal + more... Even hypnotherapy to not only make you
            look good, but feel it too! Recommended by GQ and Boss Hunting -
            UNOIT has blended your experience with top level stylists to create
            something very special. UNOIT is all about U!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
