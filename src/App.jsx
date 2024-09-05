import { useState } from "react";
import Navbar from "./components/Navbar";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (task) => {
    const id = Math.floor(Math.random() * 1000000);
    const newTodo = { id, task, completed: false };
    setTodos((state) => [...state, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((state) => state.filter((e) => e.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((state) =>
      state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        <Form addTodos={addTodos} />
      </div>
      <div className="flex items-center justify-center w-full max-w-full flex-col mt-8">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todos
              completed={todo.completed}
              id={todo.id}
              task={todo.task}
              key={todo.id}
              removeTodo={removeTodo}
              toggleComplete={toggleComplete}
            />
          ))
        ) : (
          <div className="flex flex-col items-center mt-20 justify-center text-center">
            <FontAwesomeIcon
              icon={faClipboard}
              className="text-zinc-500  h-16"
            />
            <h3 className="text-zinc-500 font-extrabold text-lg">
              Você ainda não tem tarefas cadastradas
            </h3>
            <p className="text-zinc-500 font-medium">
              Crie tarefas e organize seus items a fazer
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
