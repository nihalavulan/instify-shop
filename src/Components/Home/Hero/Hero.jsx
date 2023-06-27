import React from "react";
import { StyledComponent } from "./Hero.styled";
import Navbar from "./Navbar/Navbar";
import { Container } from "../../Common/Containers/StyledContainer";
import { Icon } from "@iconify/react";

const Hero = () => {
  return (
    <StyledComponent.StyledHeroWrapper>
      <Navbar />
      <Container>
        <StyledComponent.HeroContentWrapper>
          <StyledComponent.HeroH1Text>
            {" "}
            <span>Selling online</span> just got <span>easier</span> than ever
            before.
          </StyledComponent.HeroH1Text>
          <StyledComponent.HeroParagraph>
            Experience the future of Instagram shop management. We empowers
            sellers to effortlessly handle customers, gain insights, and drive
            remarkable sales growth. Expand your online presence with
            confidence.
          </StyledComponent.HeroParagraph>
          <StyledComponent.PrimaryButton>
            <p>Explore Demo</p> <Icon icon="mingcute:right-fill" />
          </StyledComponent.PrimaryButton>
        </StyledComponent.HeroContentWrapper>
      </Container>
    </StyledComponent.StyledHeroWrapper>
  );
};

export default Hero;
