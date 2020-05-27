import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-family: 'Roboto', sans-serif;
`;

interface IButtonProps {
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
