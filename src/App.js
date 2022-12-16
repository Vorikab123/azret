import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Counter from "./components/Counter/Counter";
import EditForm from "./components/EditForm/EditForm";
import UsersList from "./components/UsersList/UsersList";
import CounterContextProvider from "./contexts/counterContext";
import UsersContextProvider from "./contexts/usersContext";

const App = () => {
  return (
    <UsersContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add-users" element={<>
            <AddForm />
            <UsersList/>
            </>} />
            {/* <Route path="/users" element={<UsersList />} /> */}
            <Route path='/edit/:id' element={<EditForm/>} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </UsersContextProvider>
  );
};

export default App;
