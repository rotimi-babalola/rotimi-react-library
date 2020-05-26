import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  font-size: 16px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 4px;
  margin: 0 auto;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
`;

interface IInputProps {
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
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
