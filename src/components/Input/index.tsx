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
  type: 'number' | 'text' | 'password' | 'email';
  isRequired: boolean;
}

const Input: React.FC<IInputProps> = ({
  onChange,
  name,
  placeholder,
  type,
  isRequired,
  ...props
}) => (
  <StyledInput
    onChange={onChange}
    type={type}
    name={name}
    placeholder={placeholder}
    required={isRequired}
    {...props}
  />
);

export default Input;
