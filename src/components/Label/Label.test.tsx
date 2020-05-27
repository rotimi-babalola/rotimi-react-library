import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Label from './index';

afterEach(cleanup);

describe('Label', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Label htmlFor="username">Username</Label>);
    expect(asFragment).toMatchSnapshot();
  });
});
