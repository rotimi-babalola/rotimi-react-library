import React from 'react';
import styled from 'styled-components';

import Label from '../Label';
import Input from '../Input';
import Button from '../Button';

const ContainerDiv = styled.div`
  margin-bottom: 10px;
`;

interface IFormProps {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IFormProps> = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <ContainerDiv>
      <Label htmlFor="username">Username</Label>
      <Input
        name="username"
        placeholder="Type your username"
        type="text"
        isRequired
      />
    </ContainerDiv>

    <ContainerDiv>
      <Label htmlFor="password">Password</Label>
      <Input
        name="passwprd"
        placeholder="Password"
        type="password"
        isRequired
      />
    </ContainerDiv>

    <ContainerDiv>
      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        placeholder="Enter your email"
        type="email"
        isRequired
      />
    </ContainerDiv>
    <Button>Sign in</Button>
  </form>
);

export default Form;
