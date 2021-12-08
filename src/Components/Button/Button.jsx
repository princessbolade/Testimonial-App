import React from "react";
import "./Button.css";

const btn__sizes = ["btn--btn"];
const btn__styles = [
  "btn--primary",
  "btn--secondary",
  "btn--success",
  "btn--orange",
  "btn--plain",
];

export const Button = ({ children, buttonStyles, buttonSizes }) => {
  const checkButtonStyles = btn__styles.includes(buttonStyles)
    ? buttonStyles
    : btn__styles[0];
  const checkButtonSizes = btn__sizes.includes(buttonSizes)
    ? buttonSizes
    : btn__sizes[0];
  return (
    <>
      <button className={`btn ${checkButtonSizes} ${checkButtonStyles}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
