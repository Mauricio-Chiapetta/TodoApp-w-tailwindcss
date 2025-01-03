import { useState } from "react";
import Navbar from "./components/Navbar";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedItems = localStorage.getItem("todoApp");
    if (!storedItems) {
      return [];
    }
    const items = JSON.parse(storedItems);
    return items;
  });

  const addTodos = (task) => {
    setTodos((state) => {
      const id = Math.floor(Math.random() * 1000000);
      const newTodo = { id, task, completed: false };
      const updatedItems = [...state, newTodo];
      localStorage.setItem("todoApp", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeTodo = (id) => {
    setTodos((state) => {
      const updatedItems = state.filter((i) => i.id !== id);
      localStorage.setItem("todoApp", JSON.stringify(updatedItems));
      return updatedItems;
    });
    // const updatedItems = setTodos((state) => state.filter((e) => e.id !== id));
    // localStorage.setItem("todoApp", JSON.stringify(updatedItems));
    // return updatedItems;
  };

  const toggleComplete = (id) => {
    setTodos((state) => {
      const updatedItems = state.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todoApp", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };


  const completedTodos = todos.length;
  const checkedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <Navbar />
      <div className="relative">
        <Form addTodos={addTodos} />
      </div>

      <div className="flex  justify-between items-center mt-16 sm:px-96 px-4 mb-5">
        <h1 className="text-sky-400 font-bold">
          Tarefas Criadas{" "}
          <span className="text-white bg-zinc-700 px-3 py-1 rounded-full font-medium">
            {completedTodos}
          </span>
        </h1>

        <h1 className="text-violet-500 font-bold">
          Tarefas Concluídas{" "}
          <span className="text-white bg-zinc-700 px-3 py-1 rounded-full font-medium">
            {checkedTodos} de {completedTodos}
          </span>
        </h1>
      </div>

      {/* Lista de tarefas */}
      <div className="flex items-center justify-center w-full max-w-full flex-col">
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
          <div className="flex flex-col items-center justify-center text-center w-full max-w-md mx-auto border-t-2 border-zinc-700 rounded-lg mt-5 px-4 py-6">
            <FontAwesomeIcon
              icon={faClipboard}
              className="text-zinc-500 h-16"
            />
            <h3 className="text-zinc-500 font-extrabold text-lg mt-4">
              Você ainda não tem tarefas cadastradas
            </h3>
            <p className="text-zinc-500 font-medium">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
