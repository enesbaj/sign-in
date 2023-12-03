import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthRoute from './components/AuthRoute.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import UserContextProvider from './context/UserContextProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute component={Home} />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="h-full flex flex-col">
      <UserContextProvider>
        <Header />
        <RouterProvider router={router} />
      </UserContextProvider>
    </div>
  );
};

export default App;
