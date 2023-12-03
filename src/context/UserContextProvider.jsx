import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import UserContext from './User';


const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') === 'true');

  const handleSetIsLoggedIn = useCallback((value) => {
    setIsLoggedIn(value);
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn: handleSetIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};


UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
