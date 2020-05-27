import React from 'react';
import styled from 'styled-components';

import Form from './components/Form';

const StyledDiv = styled.div`
  margin: auto;
  width: 50%;
  font-family: 'Roboto', sans-serif;
`;

const App = () => (
  <StyledDiv>
    <h1 style={{ color: 'palevioletred' }}>Create Account</h1>
    <Form />
  </StyledDiv>
);

export default App;
