import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { stateSelectorIsLoggedIn } from 'redux/auth/authSelector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(stateSelectorIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};