import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import "./TodoStyles.css";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo-list-container">
      <h2 className="todo-heading"> Assigned Task</h2>

      {todos.length === 0 ? (
        <p className="todo-empty">Add Your ToDo through the Button</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item colorful-card">
              <span className="todo-text">{todo.text}</span>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
