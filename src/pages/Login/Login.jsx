import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { withStyles } from '@mui/styles';
import Layout from '../../layouts/Default';
import useSignIn from '../../hooks/useSignIn';
import LockerIcon from '../../components/Icons/Locker';

const Login = () => {
  const {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    rememberMe,
    handleRememberMeChange,
    handleSignIn,
    error,
  } = useSignIn();

  return (
    <Layout>
      <div className="max-w-[480px] w-full mx-auto pt-28">
        <div className="flex items-center flex-col">
          <div
            className="rounded-full bg-purple-400 mb-4"
            style={{
              width: 32,
              height: 32,
            }}
          >
            <LockerIcon />
          </div>

          <h1 className="text-3xl mb-8 text-center">Sign In</h1>
        </div>

        {error && <div className="py-4 text-red-600">{error}</div>}

        <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
          <CssTextField
            data-testid="email"
            id="email"
            name="email"
            label="Email Address"
            variant="outlined"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <CssTextField
            data-testid="password"
            id="password"
            name="email"
            label="Password"
            variant="outlined"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            required
          />

          <FormControlLabel
            onChange={handleRememberMeChange}
            checked={rememberMe}
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: 'white',
                  '&.Mui-checked': {
                    color: 'white',
                  },
                }}
              />
            }
            label="Rembember me"
          />

          <Button variant="contained" size="large" type="submit" data-testid="submit">
            Sign in
          </Button>
        </form>
      </div>
    </Layout>
  );
};

const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-input': {
      color: 'white',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        color: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

export default Login;
