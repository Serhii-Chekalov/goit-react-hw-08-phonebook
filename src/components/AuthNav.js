import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../components/AppBar/AppBar.module.css';

export default function AuthNav() {
  return (
    <Navbar>
      <Nav>
        <NavLink to="/register" className={styles.link} activeClassName={styles.activeLink}>
          Registration
        </NavLink>
        <NavLink to="/login" className={styles.link} activeClassName={styles.activeLink}>
          Login
        </NavLink>
      </Nav>
    </Navbar>
  );
}
