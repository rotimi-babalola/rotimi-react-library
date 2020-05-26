import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const StyledDiv = styled.div`
  margin: auto;
  width: 50%;
`;

const App = () => (
  <StyledDiv>
    <h1>Hello world!!</h1>
    <Button>Click me</Button>
  </StyledDiv>
);

export default App;
