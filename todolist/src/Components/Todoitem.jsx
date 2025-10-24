import { useState } from "react";
import { useTodoContextAPI } from "../Contexts";
import "../App.css";

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo, updatedTodo } = useTodoContextAPI();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.todo);

  const handleSave = () => {
    if (editText.trim()) {
      updatedTodo({ id: todo.id, todo: editText });
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => toggleTodo({ id: todo.id })}
        />

        {isEditing ? (
          <input
            type="text"
            className="todo-edit-field"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
        ) : (
          <span
            className={`todo-text ${
              todo.isCompleted ? "completed" : ""
            }`}
          >
            {todo.todo}
          </span>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleSave} className="save-btn">
            💾
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="edit-btn"
          >
            ✏️
          </button>
        )}
        <button
          onClick={() => deleteTodo({ id: todo.id })}
          className="delete-btn"
        >
          ❌
        </button>
      </div>
    </div>
  );
}
