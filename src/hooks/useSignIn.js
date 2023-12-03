import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/User';

const useSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { setIsLoggedIn } = useUserContext();

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleRememberMeChange = useCallback((event) => {
    setRememberMe(event.target.checked);
  }, []);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('Sign in with:', email, password, rememberMe);

    const response = await fetch('https://dummy-api/signin', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const json = await response.json();

    if (json.loggedIn) {
      setIsLoggedIn(true);

      navigate('/');

      if (rememberMe) {
        localStorage.setItem('loggedIn', 'true');
      }
    }
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    rememberMe,
    handleRememberMeChange,
    handleSignIn,
  };
};

export default useSignIn;
