import { Box, Button, Toolbar, Typography } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { stateSelectorIsLoggedIn } from 'redux/auth/authSelector';

function Header() {
  const isLoggedIn = useSelector(stateSelectorIsLoggedIn);

  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">PHONRBOOK</Typography>
          <NavLink to="/">
            <Button
              startIcon={<HomeIcon />}
              sx={{ margin: '10px', color: 'white', borderColor: 'white' }}
              variant="outlined"
            >
              Home
            </Button>
          </NavLink>
       
        {isLoggedIn && (
          <NavLink to="/contacts">
            <Button sx={{ margin: '10px', color: 'white', borderColor: 'white'  }}
                variant="outlined" >PhoneBook</Button>
          </NavLink>
          )}
           </Box>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <>
            <NavLink to="/register">
              <Button
                startIcon={<HowToRegIcon />}
                sx={{ margin: '10px', color: 'white', borderColor: 'white'  }}
                variant="outlined"
              >
                Sign Up
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button
                startIcon={<LoginIcon />}
                sx={{ margin: '10px', color: 'white', borderColor: 'white'  }}
                variant="outlined"
              >
                Log In
              </Button>
            </NavLink>
          </>
        )}
      </Toolbar>
    </>
  );
}

export default Header;
