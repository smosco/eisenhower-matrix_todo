import { createContext, useContext, useEffect, useState } from "react";

const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(readTodosFromLocal);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  // const toggleDarkMode = () => {
  //   setDarkMode((prev) => !prev); //(!darkMode)
  //   updateDarkMode(!darkMode);
  // };

  // useEffect(() => {
  //   const isDark =
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches);
  //   setDarkMode(isDark);
  //   updateDarkMode(isDark);
  // }, []);
  useEffect(() => {
    //console.log("first", JSON.parse(localStorage.getItem("todos")));
    //localStorage.setItem("todos", JSON.stringify(todos));
    console.log("내가 지금 set함");
    setTodos(JSON.parse(localStorage.getItem("todos")));
    //console.log("after", todos);
  }, []);

  return (
    <TodosContext.Provider
      value={{ todos, handleAdd, handleUpdate, handleDelete }}
    >
      {children}
    </TodosContext.Provider>
  );
}

function readTodosFromLocal() {
  //console.log("read");
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
// function updateDarkMode(darkMode) {
//   if (darkMode) {
//     document.documentElement.classList.add("dark");
//     localStorage.theme = "dark";
//   } else {
//     document.documentElement.classList.remove("dark");
//     localStorage.theme = "light";
//   }
// }
export const useTodos = () => useContext(TodosContext);
