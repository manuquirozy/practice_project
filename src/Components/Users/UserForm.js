import { useState } from "react";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const [error, setError] = useState();

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return
    }
    const user = { username: username, age: age, id: Math.random() };
    props.onUserSubmit(user);
  };

  const errorHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={changeUsernameHandler}
            value={username}
            type="text"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            onChange={changeAgeHandler}
            value={age}
            type="number"
          />
          <Button type="submit" onClick={formSubmitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
