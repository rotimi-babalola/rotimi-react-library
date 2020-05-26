import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Label from './components/Label';
import Input from './components/Input';

const StyledDiv = styled.div`
  margin: auto;
  width: 50%;
  font-family: 'Roboto', sans-serif;
`;

const App = () => (
  <StyledDiv>
    <h1>Hello world!!</h1>
    <div>
      <Label htmlFor="username">Username</Label>
      <Input name="username" placeholder="Type your name" />
      <Button>Click me</Button>
    </div>
  </StyledDiv>
);

export default App;
