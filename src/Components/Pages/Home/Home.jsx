import React from "react";
import "./Home.css";

import SubNav from "../../Sub-Nav-Bar/SubNav";
import HeroSection from "../../Hero-Section/HeroSection";
import SubHero from "../../Sub-Hero-Section/SubHero";
import TestimonialList from "../../Testimonials1/Testimonials";
import SubHeroJ from "../../Sub-Hero-Section-2/SubHeroJ";

function Home() {
  return (
    <>
      <SubNav />
      <HeroSection />
      <SubHero />
      <TestimonialList />
      <SubHeroJ />
    </>
  );
}

export default Home;
