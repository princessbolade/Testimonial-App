import React from "react";
import Button from "../Button/Button";
import "./Testimonials.css";

const testimonialLists = [
  {
    id: 1,
    name: "Joseph Ike",
    location: "In Ikeja",
  },
  {
    id: 2,
    name: "Adetola Fashina",
    location: "Ibadan",
  },
  {
    id: 3,
    name: "Emmanuel Fayemi",
    location: "In Akoka",
  },
  {
    id: 4,
    name: "Joseph Ike",
    location: "In Ikeja",
  },
  {
    id: 5,
    name: "Joseph Ike",
    location: "In Ikeja",
  },
  {
    id: 6,
    name: "Joseph Ike",
    location: "In Ikeja",
  },
];

const Testimonials = (props) => {
  return (
    <>
      <div className="container">
        {testimonialLists.forEach((testimonialList) => {
          <div className="testimonial__container">
            <img src="../../josephTestimonial.svg" alt="" />
            <h3 className="testimonial__header">
              {props.testimonialList.name}
            </h3>
            <div className="sub__testimonial">
              <span className="testimonial__location">
                {props.testimonialList.location}
              </span>
              <div className="testimonial__btn">
                <Button
                  classname="btn"
                  buttonSizes="btn-btn"
                  buttonStyles="btn--primary"
                >
                  Customer
                </Button>
              </div>
            </div>
            <p className="testimonial__paragraph"></p>
          </div>;
        })}
      </div>
    </>
  );
};

const TestimonialList = (testimonialLists) => {
  return (
    <div>
      {testimonialLists.forEach((testimonialList) => {
        return (
          <Testimonials
            testimonialList={testimonialList}
            key={testimonialList.id}
          />
        );
      })}
    </div>
  );
};

export default TestimonialList;
