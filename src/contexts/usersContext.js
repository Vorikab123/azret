import axios from "axios";
import React, { createContext, useState } from "react";

export const usersContext = createContext();

const API = "http://localhost:8000/users";

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [oneUser,setOneUser]= useState(null)

  async function addUser(newUser) {
    try {
      let res = await axios.post(API, newUser);
      //   console.log(res);
      getUsers( )
    } catch (error) {
      console.log(error);
    }
  }

  async function getUsers() {
    try {
      let { data } = await axios(API);
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(id){
    try {
      let res = await axios.delete(`${API}/${id}`)
      console.log(res)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }

  async function getOneUser(id){
    try {
      let {data}= await axios(`${API}/${id}`)
      console.log(data)
      setOneUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function updateUser(id,editedUser){
    try {
      await axios.patch(`${API}/${id}`,editedUser)
    } catch (error) {
      console.log(error)
    }
  }

  let values = {
    addUser,
    getUsers,
    users,
    deleteUser,
    getOneUser,
    oneUser,
    updateUser,
  };
  return (
    <usersContext.Provider value={values}>{children}</usersContext.Provider>
  );
};

export default UsersContextProvider;
