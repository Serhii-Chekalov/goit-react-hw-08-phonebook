import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import authSelectors from "../../redux/Auth/AuthSelectors";
import { logOut } from "../../redux/Auth/AuthOperations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Navbar>
      <p className="greetings">Добро пожаловать, {name} </p>
      <button
        className="btn-logout"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Выйти
      </button>
    </Navbar>
  );
}
