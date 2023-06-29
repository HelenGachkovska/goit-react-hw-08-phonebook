import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/authThunk';
// import { authRegister } from 'redux/Auth/authThunk';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit data:', { email, password });
    dispatch(logInThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Почта
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        Пароль
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Log In</button>
    </form>
  );
}

export default LogIn;
