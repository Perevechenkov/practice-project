import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.scss';

export default function App() {
  const [usersList, setUsersList] = useState([
    { id: '1', name: 'bruh', age: 0 },
  ]);

  const updateUsersHandler = (uName, uAge) => {
    setUsersList(prevUsers => {
      return [
        ...prevUsers,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={updateUsersHandler} />
      <UsersList users={usersList} />
    </>
  );
}
