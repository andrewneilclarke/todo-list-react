import { render, fireEvent, screen } from '@testing-library/react'
import { useState } from 'react';
import { user } from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Login from './Login'


test('integration test', async () => {
    const EMAIL = 'email@address.com';
    const PASSWORD = 'Password';

    render(<Login hasAccount={true} setHasAccount={true} />);

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const submitButton = screen.getByText(/Sign in/i)

    try {
        user.type(emailInput, EMAIL)
        user.type(passwordInput, PASSWORD)
    }
    catch (err) {
        'error'
    }

    fireEvent.click(submitButton)

    expect(await screen.findByText(/email/i)).toBeInTheDocument();

})

