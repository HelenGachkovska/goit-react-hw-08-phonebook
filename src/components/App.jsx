import { Route, Routes } from 'react-router-dom';
import SingUp from 'pages/SignUp/SingUp';
import Layout from './Layout/Layout';
import LogIn from 'pages/LogIn/LogIn';
import Home from 'pages/Home/Home';
import PhoneBook from 'pages/PhoneBook/PhoneBook';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUserThunk } from 'redux/auth/authThunk';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<SingUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="contacts" element={<PhoneBook />} />
      </Route>
    </Routes>
  );
}

export default App;
