import React from 'react';
import styled from 'styled-components';

interface ILabelProps {
  htmlFor: string;
}

const StyledLabel = styled.label`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;

const Label: React.FC<ILabelProps> = ({ children, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

export default Label;
