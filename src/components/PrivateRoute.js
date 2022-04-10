import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <Route {...routeProps}>{isLoggedIn ? children : <Redirect to={redirectTo} />}</Route>;
}
