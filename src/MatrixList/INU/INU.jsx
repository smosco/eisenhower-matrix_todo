import React, { useEffect, useState } from "react";
import Todo from "../../components/Todo/Todo";
import styles from "./TodoList.module.css";
import { useTodos } from "../../context/TodosContext";

export default function INU({ filter }) {
  // const [todos, setTodos] = useState(() => readTodosFromLocal());

  const { todos, handleUpdate, handleDelete } = useTodos();
  // const handleAdd = (todo) => setTodos([...todos, todo]);
  // const handleUpdate = (updated) =>
  //   setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // const handleDelete = (deleted) =>
  //   setTodos(todos.filter((t) => t.id !== deleted.id));
  //const filtered = getFilteredItems(todos, filter);
  const inu = getMatrixedItems(todos);

  console.log("inu", inu);

  useEffect(() => {
    console.log("내가 지금 로컬에 저장함");
    localStorage.setItem("todos", JSON.stringify(todos));
    //setTodos(JSON.parse(localStorage.getItem("todos")));
  }, [todos]);

  return (
    <section className={styles.container}>
      <div>important not urgent</div>
      <ul className={styles.list}>
        {inu.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          ></Todo>
        ))}
      </ul>
      {/* <AddTodo onAdd={handleAdd} /> */}
    </section>
  );
}

function readTodosFromLocal() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function getMatrixedItems(todos) {
  return todos.filter(
    (todo) => todo.matrix.important === "true" && todo.matrix.urgent === "false"
  );
}
