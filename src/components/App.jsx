import { Route, Routes } from 'react-router-dom';
// import SingUp from 'pages/SignUp/SingUp';
import Layout from './Layout/Layout';
// import LogIn from 'pages/LogIn/LogIn';
// import Home from 'pages/Home/Home';
// import PhoneBook from 'pages/PhoneBook/PhoneBook';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchCurrentUserThunk } from 'redux/auth/authThunk';

const Home = lazy(() => import('pages/Home/Home'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const SingUp = lazy(() => import('pages/SignUp/SingUp'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));

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
