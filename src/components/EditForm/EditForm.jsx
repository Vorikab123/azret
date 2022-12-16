import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usersContext } from "../../contexts/usersContext";

const EditForm = () => {
  const { getOneUser, oneUser, updateUser } = useContext(usersContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    getOneUser(id);
  }, []);

  useEffect(() => {
    if (oneUser) {
      setName(oneUser.name);
      setLastName(oneUser.lastName);
      setAge(oneUser.age);
    }
  }, [oneUser]);

  const { id } = useParams();
  const navigate = useNavigate()

  // получить айди из адресной строки

  function handleValues(){
    let editedUser = {
        name,
        lastName,
        age,
    }
    if (!name.trim() || !lastName.trim() || !age.trim()) {
        alert("Заполните все поля!");
        return;
      } 
      updateUser(id,editedUser)
      navigate('/add-users')
  }

  return oneUser ? (
    <div>
      <input
        onChange={(e)=> setName(e.target.value)}
        value={name}
        type="text"
      />
      <input  onChange={(e)=> setLastName(e.target.value)} value={lastName} type="text" />
      <input  onChange={(e)=> setAge(e.target.value)} value={age} type="text" />
      <button onClick={handleValues}>EDIT</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default EditForm;