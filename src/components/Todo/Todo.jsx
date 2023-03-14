import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";

export default function Todo({ todo, onUpdate, onDelete, onEdit }) {
  const { id, text, status } = todo;
  const handleDelete = () => {
    // console.dir(todo);
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={(e) => {
          const status = e.target.checked ? "completed" : "active";
          onUpdate({ ...todo, status });
        }}
      />
      {/* <label htmlFor={id} className={styles.text}>
        {text}
      </label> */}
      <EditTodoForm todo={todo} onEdit={onEdit} />
      <button onClick={handleDelete} className={styles.button}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
