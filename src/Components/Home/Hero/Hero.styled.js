import styled from "styled-components";

export const StyledComponent = {
  StyledHeroWrapper: styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.primary};
  `,
};
