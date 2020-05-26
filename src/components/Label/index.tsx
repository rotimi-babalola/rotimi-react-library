import React from 'react';

interface ILabelProps {
  htmlFor: string;
}

const Label: React.FC<ILabelProps> = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor}>{children}</label>
);

export default Label;
