import React, { useContext, useState } from "react";
import { usersContext } from "../../contexts/usersContext";

const AddForm = () => {
  const { addUser } = useContext(usersContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const handleValues = () => {
    let newUser = {
      name,
      lastName,
      age,
    };
    if (!name.trim() || !lastName.trim() || !age.trim()) {
      alert("Заполните все поля!");
      return;
    }
    addUser(newUser);
    setName("");
    setLastName("");
    setAge("");
  };
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="last name"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="text"
        placeholder="age"
      />
      <button onClick={handleValues}>Add User</button>
    </div>
  );
};

export default AddForm;
