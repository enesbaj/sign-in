import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import Login from './Login';
import UserContextProvider from '../../context/UserContextProvider';
import { RouterProvider, Router, createMemoryRouter } from 'react-router-dom';
import Home from '../Home/Home';
import AuthRoute from '../../components/AuthRoute';

const routes = [
    {
      path: '/',
      element: <AuthRoute component={Home} />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ];

describe('Login', () => {
  it('render form with email and password', () => {
    render(
      <UserContextProvider>
        <Router
          location={{
            pathname: '/login',
          }}
        >
          <Login />
        </Router>
      </UserContextProvider>
    );

    const email = screen.getByTestId('email');
    const password = screen.getByTestId('password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
 
  // TO BE COMPLETED
  it('show home page when user is logged in', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/login'],
      initialIndex: 1,
    });

    render(
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    );

    const email = screen.getByTestId('email').querySelector('input');
    const password = screen.getByTestId('password').querySelector('input');

    fireEvent.change(email, {target: {value: 'myemail@test.com'}})
    fireEvent.change(password, {target: {value: 'mypassword'}})
    

    fireEvent.click(screen.getByTestId('submit'));

    const textToSearch = 'This is a placeholder for the home page.';
    await screen.getByText(textToSearch);

    const home = screen.getByText(textToSearch);

    expect(home).toBeInTheDocument();
  });
});
