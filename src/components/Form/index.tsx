import React from 'react';
import styled from 'styled-components';

import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

const ContainerDiv = styled.div`
  margin-bottom: 10px;
`;

interface IFormProps {
  onSubmit?: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IFormProps> = ({ onSubmit }) => (
  <form onSubmit={onSubmit} data-testid="submit-form">
    <ContainerDiv>
      <Label htmlFor="username">Username</Label>
      <Input
        name="username"
        placeholder="Type your username"
        type="text"
        isRequired
        data-testid="username"
      />
    </ContainerDiv>

    <ContainerDiv>
      <Label htmlFor="password">Password</Label>
      <Input
        name="passwprd"
        placeholder="Password"
        type="password"
        isRequired
        data-testid="password"
      />
    </ContainerDiv>

    <ContainerDiv>
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        placeholder="Enter your email"
        type="email"
        isRequired
        data-testid="email"
      />
    </ContainerDiv>
    <Button data-testid="submit-button" type="submit">
      Sign in
    </Button>
  </form>
);

export default Form;
