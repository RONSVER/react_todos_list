import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Context } from "./context";
function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const name = "Ibrahim";

  function handleChange(event) {
    setTitle(event.target.value);
  }

  useEffect(() => {
    let storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function removeTodo(id) {
    setTodos(todos.filter((el) => el.id !== id));
  }

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 999),
        title: title,
      },
    ]);

    setTitle("");
  }

  return (
    <Context.Provider
      value={{
        removeTodo,
        name: name,
      }}
    >
      <div className="App">
        <h1>Todo app</h1>
        <div>
          <input
            value={title}
            type="text"
            onChange={(event) => handleChange(event)}
          />
          <button onClick={addTodo}>add todo</button>
          <TodoList todos={todos} />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
