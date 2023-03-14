import React, { useState } from "react";
import styles from "./EditTodoForm.module.css";

export const EditTodoForm = ({ todo, onEdit }) => {
  const [value, setValue] = useState(todo.text);

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    // edit todo
    //console.log({ ...todo, text: value });
    onEdit({ ...todo, text: value });
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      {/* <button type="submit" className="todo-btn">
        Add Task
      </button> */}
    </form>
  );
};
