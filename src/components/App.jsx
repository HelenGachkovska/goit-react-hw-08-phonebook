import { Route, Routes } from 'react-router-dom';
// import SingUp from 'pages/SignUp/SingUp';
import Layout from './Layout/Layout';
// import LogIn from 'pages/LogIn/LogIn';
// import Home from 'pages/Home/Home';
// import PhoneBook from 'pages/PhoneBook/PhoneBook';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchCurrentUserThunk } from 'redux/auth/authThunk';
import {PrivateRoute} from './PrivateRouter';
import { RestrictedRoute } from './RestrictedRoute';
import { stateSelectorIsLoading } from 'redux/selector';

const Home = lazy(() => import('pages/Home/Home'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const SingUp = lazy(() => import('pages/SignUp/SignUp'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(stateSelectorIsLoading)

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  return isLoading ? (<p>Loading...</p>): (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RestrictedRoute
                redirectTo="/contacts"
                component={<SingUp />}
              />} />
        <Route path="login" element={<RestrictedRoute
                redirectTo="/contacts"
                component={<LogIn />}
              />} />
        <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
            }
        />
         <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
