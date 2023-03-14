import "./App.css";
import { useState, useEffect } from "react";
// import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import IU from "./MatrixList/IU/IU";
import INU from "./MatrixList/INU/INU";
import NIU from "./MatrixList/NIU/NIU";
import NINU from "./MatrixList/NINU/NINU";
import Header from "./components/Header/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useTodos } from "./context/TodosContext";

const filters = ["all", "active", "completed"];
function App() {
  const { todos, handleAdd } = useTodos();
  //const handleDarkMode = () => toggleDarkMode();

  //const [todos, setTodos] = useState(() => readTodosFromLocal());
  //update
  // const handleAdd = (todo) => setTodos([...todos, todo]);
  const [filter, setFilter] = useState(filters[0]);
  console.log(todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <DarkModeProvider>
      {/* <Header filters={filters} fliter={filter} onFilterChange={setFilter} /> */}
      <AddTodo onAdd={handleAdd} />
      <div className="matrix-container">
        <IU filter={filter} />
        <INU filter={filter} />
        <NIU filter={filter} />
        <NINU filter={filter} />
      </div>
    </DarkModeProvider>
  );
}

function readTodosFromLocal() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export default App;
