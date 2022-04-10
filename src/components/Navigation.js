import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../components/AppBar/AppBar.module.css';
import authSelectors from '../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar>
      <Nav>
        <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
          Main page
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
            Contacts
          </NavLink>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
