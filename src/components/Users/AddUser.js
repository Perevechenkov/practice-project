import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.scss';

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (parseInt(enteredAge) < 0) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor='age'>Age (years)</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}
