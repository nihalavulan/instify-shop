import React from "react";
import styled from "styled-components";

const Logo = () => {
  return <StyledLogo>Instify.Shop</StyledLogo>;
};

export default Logo;

export const StyledLogo = styled.h2`
  color: ${({ theme }) => theme.device.white};
  font-size: 22px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.device.medium}) {
    font-size: 20px;
  }
`;
