import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { stateSelectorisLoggedIn } from 'redux/auth/authSelector';

function Header() {
  const isLoggedIn = useSelector(stateSelectorisLoggedIn);

  console.log('isLoggedIn', isLoggedIn)

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <NavLink to="/register">Sing Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </>
      )}
      <NavLink to="/contacts">PhoneBook</NavLink>
    </nav>
  );
}

export default Header;
