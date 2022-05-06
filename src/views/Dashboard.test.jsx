import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import App from '../App';
import userEvent from '@testing-library/user-event';

import { server } from '../setupTests';
server();

describe('Dashboard.jsx', () => {
  it('should render the entries for a user', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    userEvent.click(dashboardLink);
    const authForm = await findByRole('textbox');
  });
});
