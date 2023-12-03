import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { withStyles } from '@mui/styles';
import Layout from '../layouts/Default';
import useSignIn from '../hooks/useSignIn';

const Login = () => {
  const {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    rememberMe,
    handleRememberMeChange,
    handleSignIn,
  } = useSignIn();

  return (
    <Layout>
      <div className="max-w-[480px] w-full mx-auto pt-28">
        <div className='flex items-center flex-col'>
          <div className="rounded-full bg-purple-400 mb-4" style={{
            width: 32,
            height: 32
          }}>
            <Icon />
          </div>

          <h1 className="text-3xl mb-8 text-center">Sign In</h1>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleSignIn}>
          <CssTextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <CssTextField
            id="outlined-basic"
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

          <Button variant="contained" size="large" type="submit">
            Sign in
          </Button>
        </form>
      </div>
    </Layout>
  );
};

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      enableBackground="new 0 0 50 50"
    >
      <path d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9v4z" />
      <path d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zM17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1H17z" />
      <circle cx="25" cy="28" r="2" />
      <path d="M25.5 28h-1l-1 6h3z" />
    </svg>
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
