import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from 'redux/auth/authThunk';
// import { toast } from 'react-toastify';
// import { authRegister } from 'redux/auth/authThunk';

function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit data:', { name, email, password });
    dispatch(signUpThunk({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>

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

      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SingUp;
