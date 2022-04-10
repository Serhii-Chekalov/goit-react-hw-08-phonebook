import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import authSelectors from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <p className="greetings">Welcome, {name} </p>
      <button className="btn-logout" type="button" onClick={() => dispatch(logOut())}>
        Exit
      </button>
    </Navbar>
  );
}
