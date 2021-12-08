import React from "react";
import Button from "../Button/Button";
import "./Testimonials.css";

const testimonialLists = [
  {
    id: 1,
    name: "Joseph Ike",
    location: "In Ikeja",
    image: "../../josephTestimonial.svg",
  },
  {
    id: 2,
    name: "Adetola Fashina",
    location: "Ibadan",
    image: "../../adetolaTestimonial.svg",
  },
  {
    id: 3,
    name: "Emmanuel Fayemi",
    location: "In Akoka",
    image: "../../emmanuelTestimonial.svg",
  },
  {
    id: 4,
    name: "Chisom Obilor",
    location: "In Magodo",
    image: "../../chisomTestimonial.svg",
    isVendor: true,
  },
  {
    id: 5,
    name: "Adunoluwa Adeyemi",
    location: "Iwo Road",
    image: "../../adunoluwaTestimonial.svg",
    isVendor: true,
  },
  {
    id: 6,
    name: "Chidi Okeke",
    location: "In Somolu",
    image: "../../chidiTestimonial.svg",
    isVendor: true,
  },
];

const Testimonials = ({ testimonial }) => {
  return (
    <>
      <div className="testimonial__container">
        <img src={testimonial.image} alt="" />
        <h3 className="testimonial__header">{testimonial.name}</h3>
        <div className="sub__testimonial">
          <span className="testimonial__location">{testimonial.location}</span>
          <div className="testimonial__btn">
            <Button
              classname="btn"
              buttonSizes="btn-btn"
              buttonStyles={
                testimonial.isVendor ? "btn--success" : "btn--primary"
              }
            >
              {testimonial.isVendor ? "Vendor" : "Customer"}
            </Button>
          </div>
        </div>
        <p className="testimonial__paragraph">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deser unt ut
          voluptate aute id deserunt nisi. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet.
        </p>
      </div>
    </>
  );
};

const TestimonialList = () => {
  return (
    <div className="container">
      {testimonialLists.map((testimonial) => {
        return <Testimonials testimonial={testimonial} key={testimonial.id} />;
      })}
    </div>
  );
};

export default TestimonialList;
