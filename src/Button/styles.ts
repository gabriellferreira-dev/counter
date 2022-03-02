import styled, { css } from 'styled-components';

type ButtonStyleProps = {
  color: 'primary' | 'secondary';
  icon?: boolean;
};

export const Container = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ icon }) => (icon ? 'space-between' : 'center')};
  padding: 5px 15px;
  font-size: 1.6rem;
  height: 56px;
  min-width: 311px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.variants.primary.hovered.bg};
    color: ${({ theme }) => theme.colors.variants.primary.hovered.color};
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors.variants.primary.disabled.bg};
    color: ${({ theme }) => theme.colors.variants.primary.disabled.color};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.colors.variants.primary.pressed.bg};
    color: ${({ theme }) => theme.colors.variants.primary.pressed.color};
  }

  ${({ color, theme }) =>
    color === 'secondary' &&
    css`
      background-color: ${theme.colors.secondaryColor};
      color: ${theme.colors.black};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.variants.secondary.hovered.bg};
        color: ${({ theme }) => theme.colors.variants.secondary.hovered.color};
      }

      &:disabled {
        background-color: ${({ theme }) =>
          theme.colors.variants.secondary.disabled.bg};
        color: ${({ theme }) => theme.colors.variants.secondary.disabled.color};
      }

      &:active {
        background-color: ${({ theme }) =>
          theme.colors.variants.secondary.pressed.bg};
        color: ${({ theme }) => theme.colors.variants.secondary.pressed.color};
      }
    `}
`;
