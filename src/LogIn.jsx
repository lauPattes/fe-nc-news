import { useContext } from "react";
import { LoggedInUserContext } from "./LoggedInUser";
import UserList from "./UserList";
import { Link } from "react-router-dom";


export default function LogIn() {
    const { user, setUser } = useContext(LoggedInUserContext);
return(
    <div>
    <header>
    <nav className="menuLink">
      <Link to="/home_pop-up">Menu</Link>
      <Link to="/">Home</Link>
    </nav>
  </header>
  <UserList/>
    </div>
)
}
