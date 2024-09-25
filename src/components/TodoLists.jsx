import React from "react";
import Todo from "./Todo";
import { Toast } from "../libs/Toast";

const TodoLists = ({ todos, setTodos, handleEdit }) => {
  //* TODO DELETE
  const handleDelete = (index) => {
    const newTodoLists = [...todos];
    newTodoLists.splice(index, 1);
    setTodos(newTodoLists);
    Toast.fire({
      icon: "success",
      title: "Todo has been deleted",
    });
  };

  


  return (
    <div className="card mt-3">
      <div className="card-body">
        {todos.map((todo, index) => (
          <Todo
            handleEdit={handleEdit}
            deleteTodo={handleDelete}
            key={index}
            todo={todo}
            index={index}
          />
        ))}

        {todos.length == 0 && (
          <p className="text-center">Please add a new todo</p>
        )}
      </div>
    </div>
  );
};

export default TodoLists;
