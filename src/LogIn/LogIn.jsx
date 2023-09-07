import { useContext } from "react";
import { LoggedInUserContext } from "../LoggedInUser";
import UserForm from "./UserForm";
import { Link } from "react-router-dom";

export default function LogIn() {
  const { user, setUser } = useContext(LoggedInUserContext);
  return (
    <div className="log_in">
      <header>
        <nav className="nav">
          <Link to="/home_pop-up" className="menuLink">
            Menu
          </Link>
          <Link to="/" className="homeLink">
            Home
          </Link>
        </nav>
      </header>
      <UserForm />
    </div>
  );
}
