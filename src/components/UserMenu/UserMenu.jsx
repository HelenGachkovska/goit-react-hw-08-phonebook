import { useDispatch, useSelector } from 'react-redux';
import { stateSelectorUserName } from 'redux/auth/authSelector';
import { logOutThunk } from 'redux/auth/authThunk';

function UserMenu() {
const name = useSelector(stateSelectorUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Welcome, {name}</h2>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
