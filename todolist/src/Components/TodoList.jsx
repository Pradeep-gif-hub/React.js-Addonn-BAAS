import { useTodoContextAPI } from "../Contexts";
import TodoItem from "./Todoitem";
import "../App.css";

export default function TodoList() {
  const { todos } = useTodoContextAPI();

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos">No todos yet!</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
