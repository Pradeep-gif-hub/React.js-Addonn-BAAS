import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./TodoStyles.css";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="todo-container">
      <h1 className="app-title">Todo App</h1>
      <form onSubmit={addTodoHandler} className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="Add something to do..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
