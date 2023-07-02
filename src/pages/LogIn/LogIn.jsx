import { Button, FormLabel, Input } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { stateSelectorIsLoggedIn } from 'redux/auth/authSelector';
import { logInThunk } from 'redux/auth/authThunk';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(stateSelectorIsLoggedIn);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        toast.error('You have entered incorrect data, please try again!', {
          position: 'top-right',
        });
        throw new Error(error.message);
        
      });
    // setEmail('');
    // setPassword('');
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <form
      style={{
        width: '500px',
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '30px',
        alignContent: 'center',
      }}
      onSubmit={handleSubmit}
    >
      <FormLabel sx={{ display: 'flex', flexDirection: 'column', mb: '30px' }}>
        E-mail
        <Input
          variant="solid"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel sx={{ display: 'flex', flexDirection: 'column', mb: '30px' }}>
        Password
        <Input
          variant="solid"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormLabel>

      <Button
        sx={{
          margin: '10px',
          color: 'gray',
          borderColor: 'gray',
          display: 'block',
          mr: 'auto',
          ml: 'auto',
        }}
        variant="outlined"
        type="submit"
      >
        Log In
      </Button>
    </form>
  );
}

export default LogIn;
