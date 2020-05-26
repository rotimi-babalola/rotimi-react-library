import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
`;

interface IInputProps {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = ({ onChange, name, placeholder }) => (
  <StyledInput
    onChange={onChange}
    type="text"
    name={name}
    placeholder={placeholder}
  />
);

export default Input;
