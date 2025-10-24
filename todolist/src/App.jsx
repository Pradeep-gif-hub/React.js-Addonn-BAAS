import { TodoContextAPIProvider } from "./Contexts";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  return (
    <TodoContextAPIProvider>
      <div className="app-container">
        <h1 className="app-title">My Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoContextAPIProvider>
  );
}

export default App;
