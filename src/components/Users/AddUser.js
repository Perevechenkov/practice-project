import { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUser.module.scss';

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Pls enter a valid name and age (non-empty)',
      });
      return;
    }

    if (parseInt(enteredAge) < 0) {
      setError({ title: 'Invalid age', message: 'Pls enter a valid age (>0)' });
      return;
    }

    props.onAddUser(enteredName, enteredAge);

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
}
