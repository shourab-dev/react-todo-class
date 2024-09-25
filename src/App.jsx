import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Swal from "sweetalert2";
import "./todo.css";
import TodoLists from "./components/TodoLists";

const App = () => {
  const [todos, setTodos] = useState([]);
  //* SELECTED INPUT
   const [input, setInput] = useState("");
  //* STORE INDEX
  const [index, setIndex] = useState(null);


  //* todo edit
  const handleEdit = (index) =>{
    setInput(todos[index]);
    setIndex(index)
  }

  return (
    <div className="wrapper">
      <AddTodo setIndex={setIndex} todos={todos} index={index} input={input} setInput={setInput} setTodos={setTodos} />
      <TodoLists handleEdit={handleEdit} setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
