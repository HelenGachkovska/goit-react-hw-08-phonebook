import { NavLink } from 'react-router-dom';

function Header() {
    return <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Sing Up</NavLink>
        <NavLink to='/login'>Log In</NavLink>
        <NavLink to='/contacts'>PhoneBook</NavLink>        
    </nav>
}

export default Header;