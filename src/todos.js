import { useState } from "react";

export const Todos = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = (e) => {
    if (!todoText) {
      return;
    }
    setTodos([todoText, ...todos]);
    setTodoText("");
  };

  return (
    <div className="App_todo">
      <div className="App_todo--toolbar">
        <input
          className="App_todo-input"
          data-testid="todo-input"
          placeholder="Enter text"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
          required
        />
        <button data-testid="todo-button" onClick={handleClick}>
          Add
        </button>
      </div>
      <div data-testid="todo-container">
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    </div>
  );
};