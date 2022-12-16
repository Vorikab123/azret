import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usersContext } from "../../contexts/usersContext";

const UsersList = () => {
  const navigate = useNavigate()
  const { getUsers, users,deleteUser } = useContext(usersContext);
  useEffect(() => {
    getUsers();
  }, []);
  console.log(users);
  return (
    <div>
      {users.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastName}</li>
          <li>{item.age}</li>
          <button onClick={()=>navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={()=>deleteUser(item.id)}>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default UsersList;
