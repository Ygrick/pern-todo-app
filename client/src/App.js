import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <Fragment>
      <div className="container">
        <LoginPage />
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
