import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    const temp = usersList.filter((e) => e.id === uName + uAge);
    if (temp.length === 0) {
      setUsersList((prevUsersList) => {
        return [...prevUsersList, { name: uName, age: uAge, id: uName + uAge }];
      });
    } else {
      console.log("User already exist, not adding");
    }
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
