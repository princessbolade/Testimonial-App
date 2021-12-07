import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero__section">
        <div>
          <h1 className="hero__section__header">
            Amazing <br /> Experiences from Our <br />
            Wonderful Customers
          </h1>
          <p className="hero__section__paragraph">
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <img
          src="../../heroSection.svg"
          alt=""
          className="hero__section__img"
        />
      </div>
    </>
  );
}

export default HeroSection;
