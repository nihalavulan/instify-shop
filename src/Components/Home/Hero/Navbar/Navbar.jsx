import React from "react";
import { Container } from "../../../Common/Containers/StyledContainer";
import Logo from "../../../Common/Logo/Logo";
import { StyledComponent } from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledComponent.NavBarWrapper>
      <Container>
        <StyledComponent.NavItemWrapper>
          <Logo />
          <StyledComponent.NavFaqButton>FAQ's</StyledComponent.NavFaqButton>
        </StyledComponent.NavItemWrapper>
      </Container>
    </StyledComponent.NavBarWrapper>
  );
};

export default Navbar;
