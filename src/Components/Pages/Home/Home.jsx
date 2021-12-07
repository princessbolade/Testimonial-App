import React from "react";
import "./Home.css";

import SubNav from "../../Sub-Nav-Bar/SubNav";
import HeroSection from "../../Hero-Section/HeroSection";
import SubHero from "../../Sub-Hero-Section/SubHero";
import TestimonialList from "../../Testimonials1/Testimonials";

function Home() {
  return (
    <>
      <SubNav />
      <HeroSection />
      <SubHero />
      <TestimonialList />
    </>
  );
}

export default Home;
