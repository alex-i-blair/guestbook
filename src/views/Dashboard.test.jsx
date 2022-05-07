import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { UserProvider } from '../context/UserContext';

describe('Dashboard.jsx', () => {
  it('should render the entries for a user', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    let dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    userEvent.click(dashboardLink);
    const email = screen.getByRole('textbox');
    const password = screen.getByPlaceholderText(/password/i);
    userEvent.type(email, 'test@gmail.com');
    userEvent.type(password, 'password');
    const signIn = screen.getByRole('button', {
      name: /sign in/i,
    });
    userEvent.click(signIn);

    dashboardLink = await screen.findByRole('link', { name: /dashboard/i });
    userEvent.click(dashboardLink);
    await waitForElementToBeRemoved(screen.getByText(/loading.../i));
    await screen.findByText(/logged in as test@gmail.com/i);
    const entry = screen.getByRole('textbox');
    const submit = screen.getByRole('button', {
      name: /new entry/i,
    });
    screen.getByRole('heading', {
      name: /stuff/i,
    });
    screen.getByRole('heading', {
      name: /test/i,
    });
    screen.getByRole('button', {
      name: /logout/i,
    });
    userEvent.type(entry, 'test pass');
    userEvent.click(submit);
    await screen.findByText(/test pass/i);
  });
});
