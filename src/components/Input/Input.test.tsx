import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Input from './index';

afterAll(cleanup);

describe('Input', () => {
  const onChangeSpy = jest.fn();
  const renderInput = () =>
    render(
      <Input
        onChange={onChangeSpy}
        name="input"
        type="text"
        isRequired
        data-testid="input"
      />,
    );

  it('should match snapshot', () => {
    const { asFragment } = renderInput();
    expect(asFragment).toMatchSnapshot();
  });

  it('should call onChange callback', () => {
    const { getByTestId } = renderInput();

    const input = getByTestId('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Rotimi' } });
    expect(onChangeSpy).toHaveBeenCalled();
    expect(input.value).toBe('Rotimi');
  });
});
