import { useState } from "react";
import { useTodoContextAPI } from "../Contexts";
import "../App.css";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContextAPI();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo({ todo });
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Todo"
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        Add
      </button>
    </form>
  );
}
