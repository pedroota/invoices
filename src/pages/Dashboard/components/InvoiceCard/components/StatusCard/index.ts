import styled, { css, keyframes } from 'styled-components';

interface StatusCardProps {
  variant: string;
}

const pulse = keyframes`
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(252, 245, 23, 0.3);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 0.15rem rgba(252, 245, 23, 0.3);
  }
  100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(252, 245, 23, 0.3);
  }
`;

export const StatusCard = styled.div<StatusCardProps>`
  padding: 0.8rem 2rem;
  border-radius: 0.4rem;
  font-weight: 600;
  background-color: #c6f6d5;
  color: #38a169;
  position: relative;

  &::before {
    content: '';
    width: 0.6rem;
    height: 0.6rem;
    background-color: ${(props) => (props.variant === 'Pending' ? '#fcf519' : '#0dfc58')};
    border-radius: 50%;
    position: absolute;
    left: 12%;
    top: 44%;
    animation: ${pulse} 2s infinite;
  }

  ${({ variant }) => css`
    background-color: ${variant === 'Pending' ? '#FEFCBF' : '#C6F6D5'};
    color: ${variant === 'Pending' ? '#D69E2E' : '#38A169'};
  `}
`;
