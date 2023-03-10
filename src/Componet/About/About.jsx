import React from 'react'
import web from '../Img/aboutimg.webp'
import HeroSection from '../Home/HeroSection';

const About = () => {
   

  return (
    <HeroSection
      name="Khudaka Store"
      img={web}
      btn="Contact Now"
      link="/contact"/>
  );
}

export default About;
