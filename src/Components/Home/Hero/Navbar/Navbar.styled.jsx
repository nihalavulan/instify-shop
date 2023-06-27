import styled from "styled-components";

export const StyledComponent = {
  NavBarWrapper: styled.header`
    width: 100%;
    height: 56px;
    padding: 1rem 0;
  `,
  NavItemWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.white};
  `,
  NavFaqButton: styled.a`
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;

    :hover {
      transition-duration: 0.4s;
      text-decoration: underline;
    }
  `,
};
