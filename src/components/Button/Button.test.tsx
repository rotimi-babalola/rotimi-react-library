import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button from './index';

afterEach(cleanup);

describe('Button', () => {
  const onClickSpy = jest.fn();
  const renderButton = () =>
    render(<Button onClick={onClickSpy}>Click me</Button>);

  it('should match snapshot', () => {
    const { asFragment } = renderButton();
    expect(asFragment).toMatchSnapshot();
  });

  it('should call onClick callback', () => {
    const { getByText } = renderButton();
    fireEvent.click(getByText('Click me'));
    expect(onClickSpy).toHaveBeenCalled();
  });
});
