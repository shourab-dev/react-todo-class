import React from "react";
import Todo from "./Todo";
const TodoLists = ({ todos }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        
        {todos.map((todo,index) => (
          <Todo key={index} todo={todo} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TodoLists;
