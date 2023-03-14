import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [matrix, setMatrix] = useState({});
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (text.trim().length === 0) {
    //   return;
    // }
    onAdd({ id: uuidv4(), matrix, text, status: "active" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        required
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <select
        id="important"
        onChange={(e) => setMatrix({ ...matrix, important: e.target.value })}
      >
        <option value="">--important--</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <select
        id="urgent"
        onChange={(e) => setMatrix({ ...matrix, urgent: e.target.value })}
      >
        <option value="">--urgent--</option>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <button className={styles.button}>Add</button>
    </form>
  );
}
