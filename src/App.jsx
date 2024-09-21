import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Swal from "sweetalert2";
import "./todo.css";
import TodoLists from "./components/TodoLists";

const App = () => {
  const [todos, setTodos] = useState(["To do HW", "Test todo"]);
    
  return (
    <div className="wrapper">
      <AddTodo setTodos={setTodos} />
      <TodoLists todos={todos} />
    </div>
  );
};

export default App;
