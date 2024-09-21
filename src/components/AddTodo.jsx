import React, { useState } from "react";
import Btn from "./Btn";
import { FiFilePlus } from "react-icons/fi";
import { Toast } from "../libs/Toast";


const AddTodo = ({ setTodos }) => {
  const [input, setInput] = useState("");

  //* FORM SUBMIT -- ADD TODO

  const formSubmit = (e) => {
    e.preventDefault();
    if (input.length <= 3) {
      Toast.fire({
        icon: "error",
        title: "Please type min 4 char",
      });
      return false;
    }
    setTodos((prev) => [input, ...prev]);

    setInput("");

    Toast.fire({
      icon: "success",
      title: "Todo successfully added",
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={formSubmit}>
          <div className="d-flex">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Add Todo"
              className="form-control border-2 rounded-0"
            />
            <Btn className="col-4 rounded-0 btn-dark">
              Add Todo <FiFilePlus />
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
