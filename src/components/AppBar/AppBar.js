import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import authSelectors from '../../redux/auth/authSelectors';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Navbar>
  );
}
