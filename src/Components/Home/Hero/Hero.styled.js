import styled from "styled-components";

export const StyledComponent = {
  StyledHeroWrapper: styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.primary};
  `,
  HeroContentWrapper: styled.div`
    text-align: center;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  HeroH1Text: styled.h1`
    font-size: 6.25rem;
    font-weight: 300;
    line-height: 116px;
    color: ${({ theme }) => theme.color.white};
    span {
      font-weight: 600;
    }

    @media (max-width: ${({ theme }) => theme.device.large}) {
      font-size: 3.25rem;
      line-height: 86px;
    }
    @media (max-width: ${({ theme }) => theme.device.small}) {
      font-size: 2.25rem;
      line-height: 56px;
    }
  `,
  HeroParagraph: styled.p`
    font-size: 18px;
    color: #a4a4a4;
    max-width: 70%;
    font-weight: 200;
    margin-top: 1rem;
    line-height: 33px;

    @media (max-width: ${({ theme }) => theme.device.large}) {
      font-size: 14px;
      line-height: 33px;
      max-width: 90%;
    }
    @media (max-width: ${({ theme }) => theme.device.small}) {
      font-size: 10px;
      line-height: 23px;
    }
  `,
  PrimaryButton: styled.div`
    border-radius: 25px;
    background-color: ${({ theme }) => theme.color.secondary};
    padding: 24px 72px;
    outline: none;
    border: none;
    margin-top: 3rem;

    color: #03045e;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    :hover {
      background-color: #a0a1fa;
    }

    @media (max-width: ${({ theme }) => theme.device.large}) {
      padding: 14px 62px;
      border-radius: 15px;
      font-size: 12px;
    }
  `,
};
