import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LoggedInUserContext } from "./LoggedInUser";

export default function UserList() {
  const { user, setUser } = useContext(LoggedInUserContext);

  const [availableUsers, SetAvailableUsers] = useState([]);
  const [inputName, SetInputName] = useState("");
  const [inputUsername, SetInputUsername] = useState("");
  const [attemptedToLogIn, SetAttemptedToLogIn] = useState(false);

  useEffect(() => {
    axios.get("https://laura-news.onrender.com/api/users").then(({ data }) => {
      const usersArray = data.response;
      SetAvailableUsers(usersArray);
      console.log(availableUsers)
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
    SetAttemptedToLogIn(true);
    let inputMatchesUser = false;
    availableUsers.forEach((availableUser) => {
      if (
        availableUser.name === inputName &&
        availableUser.username === inputUsername
      ) {
        inputMatchesUser = true;
        setUser(availableUser);
      }
    });

    if (inputMatchesUser) {
      return true;
    } else {
      return false;
    }
  }

  function logInResult() {
    if (attemptedToLogIn === true) {
      if (handleUserSubmit === true) {
        return <p>You are succesfully logged in as {user.username}</p>;
      } else {
        return <p>Name/Username incorrect, please try again</p>;
      }
      SetAttemptedToLogIn(false)
    }
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
      {logInResult()}
    </section>
  );
}
