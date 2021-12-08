import React from "react";
import Button from "../Button/Button";
import "./SubHeroJ.css";

function SubHeroJ() {
  return (
    <>
      <div className="sub__heroJ__section">
        <div className="sub__heroJ__section__2">
          <div className="subJ__section">
            <h1 className="sub__heroJ__section__header">Josiah’s Experience</h1>
            <Button
              className="btn"
              buttonSizes="btn--btn"
              buttonStyles="btn--orange"
            >
              Vendor
            </Button>
            <p className="sub__heroJ__section__paragraph">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>

            <button className="btn__subJ">
              <img src="../../shareStory2.svg" alt="" />
            </button>
          </div>
          <img
            src="../../subHeroJ.svg"
            alt=""
            className="sub__heroJ__section__img"
          />
        </div>
      </div>
    </>
  );
}

export default SubHeroJ;
