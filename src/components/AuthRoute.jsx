import { Navigate } from 'react-router-dom';
import { useUserContext } from '../context/User';

const AuthRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useUserContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Component {...rest} />;
};

AuthRoute.propTypes = {
  component: () => {},
};

export default AuthRoute;
