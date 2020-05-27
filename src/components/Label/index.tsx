import React from 'react';
import styled from 'styled-components';

interface ILabelProps {
  htmlFor: string;
}

const StyledLabel = styled.label`
  font-size: 16px;
  color: palevioletred;
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  margin-bottom: 5px;
`;

const Label: React.FC<ILabelProps> = ({ children, htmlFor }) => (
  <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
);

export default Label;
