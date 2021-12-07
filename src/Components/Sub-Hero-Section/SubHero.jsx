import React from "react";
import Button from "../Button/Button";
import "./SubHero.css";

function SubHero() {
  return (
    <>
      <div className="sub__hero__section">
        <div className="sub__hero__section__2">
          <img
            src="../../subHero.svg"
            alt=""
            className="sub__hero__section__img"
          />
          <div className="sub__section">
            <h1 className="sub__hero__section__header">
              Tolu & Joy’s Experience
            </h1>
            <Button buttonSizes="btn--btn" buttonStyles="btn--plain">
              Customer
            </Button>
            <p className="sub__hero__section__paragraph">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <button className="btn__sub" buttonSizes="btn-btn">
              <img src="../../shareStory.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHero;
