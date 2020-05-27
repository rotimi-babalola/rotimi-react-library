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
    <Form
      onSubmit={evt => {
        evt.preventDefault();
        // eslint-disable-next-line no-alert
        alert('Form submitted!!');
      }}
    />
  </StyledDiv>
);

export default App;
