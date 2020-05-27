import { cleanup, render } from '@testing-library/react';
import React from 'react';
import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('should render', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
