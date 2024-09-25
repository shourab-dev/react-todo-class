import React from "react";
import Btn from "./Btn";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, index, deleteTodo, handleEdit }) => {
  return (
    <div className="card shadow p-3 mb-2">
      <div className="row">
        <div className="col-8">
          <h5>
            {++index}. {todo}
          </h5>
        </div>
        <div className="col-4 text-end">
          <div className="btn-group">
            <Btn onClick={()=> handleEdit(--index)} className="btn-sm btn-warning">
              <FiEdit />
            </Btn>
            <Btn
              onClick={() => deleteTodo(--index)}
              className="btn-sm btn-danger"
            >
              <AiOutlineDelete />
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
