import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { stateSelectorIsLoggedIn } from 'redux/auth/authSelector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(stateSelectorIsLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// export default function PrivateRoute({
//   children,
//   redirectTo = '/',
//   ...routeProps
// }) {
//     const isLoggedIn = useSelector(stateSelectorisLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
