import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { SubjectsSection } from '../components/sections/SubjectsSection';
import { CTASection } from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <CTASection />
    </>
  );
};

export default Home;
