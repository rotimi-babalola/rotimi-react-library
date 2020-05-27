import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form from './index';

afterEach(cleanup);

describe('Form', () => {
  const onSubmitSpy = jest.fn();
  const renderForm = () => render(<Form onSubmit={onSubmitSpy} />);

  it('should match snapshot', () => {
    const { asFragment } = renderForm();
    expect(asFragment).toMatchSnapshot();
  });

  it('should call onSubmit callback', () => {
    const { getByTestId } = renderForm();

    const usernameInput = getByTestId('username') as HTMLInputElement;
    const passwordInput = getByTestId('password') as HTMLInputElement;
    const emailInput = getByTestId('email') as HTMLInputElement;

    expect(usernameInput.value).toBe('');

    fireEvent.change(usernameInput, { target: { value: 'Rotimi' } });
    fireEvent.change(passwordInput, { target: { value: 'admin123' } });
    fireEvent.change(emailInput, { target: { value: 'rotimi@email.com' } });

    fireEvent.submit(getByTestId('submit-form'));
    expect(onSubmitSpy).toHaveBeenCalled();
  });
});
