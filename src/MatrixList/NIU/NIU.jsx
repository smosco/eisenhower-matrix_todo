import React, { useEffect } from "react";
import Todo from "../../components/Todo/Todo";
import styles from "./TodoList.module.css";
import { useTodos } from "../../context/TodosContext";

export default function NIU({ filter }) {
  // const [todos, setTodos] = useState(() => readTodosFromLocal());
  const { todos, handleUpdate, handleDelete, handleEdit } = useTodos();

  // const handleUpdate = (updated) =>
  //   setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // const handleDelete = (deleted) =>
  //   setTodos(todos.filter((t) => t.id !== deleted.id));
  //const filtered = getFilteredItems(todos, filter);
  const niu = getMatrixedItems(todos);

  console.log("niu", niu);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <div>not import urgent</div>
      <ul className={styles.list}>
        {niu.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            onEdit={handleEdit}
          ></Todo>
        ))}
      </ul>
    </section>
  );
}

function readTodosFromLocal() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
// function getFilteredItems(todos, filter) {
//   if (filter === "all") {
//     return todos;
//   }
//   return todos.filter((todo) => todo.status === filter);
// }

function getMatrixedItems(todos) {
  return todos.filter(
    (todo) => todo.matrix.important === "false" && todo.matrix.urgent === "true"
  );
}
