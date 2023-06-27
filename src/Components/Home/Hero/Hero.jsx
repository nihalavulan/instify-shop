import React from "react";
import { StyledComponent } from "./Hero.styled";
import Navbar from "./Navbar/Navbar";

const Hero = () => {
  return (
    <StyledComponent.StyledHeroWrapper>
      <Navbar />
    </StyledComponent.StyledHeroWrapper>
  );
};

export default Hero;
