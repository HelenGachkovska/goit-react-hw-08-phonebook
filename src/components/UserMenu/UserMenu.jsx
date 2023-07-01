import { Button, Toolbar, Typography } from '@mui/material';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { useDispatch, useSelector } from 'react-redux';
import { stateSelectorUserName } from 'redux/auth/authSelector';
import { logOutThunk } from 'redux/auth/authThunk';

function UserMenu() {
  const name = useSelector(stateSelectorUserName);
  const dispatch = useDispatch();

  return (
    <Toolbar>
      <Typography variant="h6">Welcome, {name}</Typography>
      <Button
        sx={{ margin: '10px', color: 'white', borderColor: 'white' }}
        variant="outlined"
        startIcon={<RecentActorsIcon />}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Log Out
      </Button>
    </Toolbar>
  );
}

export default UserMenu;
