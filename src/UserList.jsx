import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LoggedInUserContext } from "./LoggedInUser";

export default function UserList() {
  const { user, SetUser } = useContext(LoggedInUserContext);

  const [availableUsers, SetAvailableUsers] = useState([]);
  const [inputName, SetInputName] = useState("");
  const [inputUsername, SetInputUsername] = useState("");
  const [attemptedToLogIn, SetAttemptedToLogIn] = useState(false);

  useEffect(() => {
    axios.get("https://laura-news.onrender.com/api/users").then(({ data }) => {
      const usersArray = data.response;
      SetAvailableUsers(usersArray);
      console.log(availableUsers);
    });
  }, []);

  function handleNameChange(event) {
    SetInputName(event.target.value);
  }

  function handleUsernameChange(event) {
    SetInputUsername(event.target.value);
  }

  function handleUserSubmit(event) {
    event.preventDefault();
    availableUsers.forEach((availableUser) => {
      if (
        availableUser.name === inputName &&
        availableUser.username === inputUsername
      ) {
        return SetUser(availableUser);
      }
    });
  }

  return (
    <section>
      <form onSubmit={handleUserSubmit}>
        <label htmlFor="name" id="name">
          Enter name
        </label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={inputName}
        />
        <label htmlFor="username">Enter username</label>
        <input
          type="text"
          name="username"
          onChange={handleUsernameChange}
          value={inputUsername}
        />
        <button>Log In</button>
      </form>
      {user ? (
        <p>you are succesffully logged in as {user.username}</p>
      ) : (
        <p>name/username incorrect please try again</p>
      )}
    </section>
  );
}
