import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  max-width: ${({ theme }) => theme.container.extraLarge};
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.device.medium}) {
    max-width: ${({ theme }) => theme.container.medium};
  }

  @media (max-width: ${({ theme }) => theme.device.small}) {
    max-width: ${({ theme }) => theme.container.small};
  }

  @media (max-width: ${({ theme }) => theme.device.extraSmall}) {
    max-width: ${({ theme }) => theme.container.extraSmall};
  }
`;
