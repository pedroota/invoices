import styled, { css } from 'styled-components';

interface IButtonProps {
  variant: 'primary' | 'warning' | 'sucess';
}

export const Button = styled.button<IButtonProps>`
  width: 100%;
  color: white;
  white-space: nowrap;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-size: 1rem;

  ${({ variant }) => css`
    background-color: ${(variant === 'primary' && '#bac1c2') ||
    (variant === 'warning' && '#f03426') ||
    (variant === 'sucess' && '#09E331')};
  `}
`;
