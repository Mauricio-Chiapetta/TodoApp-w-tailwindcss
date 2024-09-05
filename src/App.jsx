import { useState } from "react";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import {
  faPlusCircle,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  // const completeRef = useRef(null);

  const addTodos = (task) => {
    const id = Math.floor(Math.random() * 1000000);
    const newTodo = { id, task, completed: false };
    setTodos((state) => [...state, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((state) => state.filter((e) => e.id !== id));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (task.trim()) {
      addTodos(task);
      setTask("");
    }
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
        <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center p-4 ">
          <form
            className="flex items-center justify-center w-full max-w-full "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="addTask"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Adicione uma nova tarefa"
              className="bg-zinc-800 border-none text-white placeholder-zinc-500 font-medium outline-none focus:border-purple-800 focus:ring-1 focus:ring-violet-400 rounded-lg px-2 py-3 mr-2 w-5/12 shadow-lg"
            />
            <button className="transition duration-300 bg-sky-600 hover:bg-sky-500 text-white p-5 py-3 rounded-lg font-semibold shadow-lg">
              Criar <FontAwesomeIcon icon={faPlusCircle} />
              {/* adicionar icone de plus(+) */}
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-w-full flex-col mt-8">
        {todos.map((todo) => (
          <div key={todo.id} className="w-1/2 mb-3">
            <div
              className="bg-zinc-800 border-none outline-none rounded-lg p-4 flex
              items-center shadow-sm shadow-zinc-950 justify-between relative"
            >
              <input
                className="cursor-pointer appearance-none border-2 w-4 h-4 rounded-xl border-sky-400 hover:border-sky-400/60 hover:bg-sky-500/15 checked:bg-violet-400/85 checked:border-0 checked:hover:bg-violet-400 peer"
                type="checkbox"
                // ref={completeRef}
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <svg
                className="
      absolute 
      w-2 h-3 ml-1
      text-white  hidden peer-checked:block pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>

              <h2
                className={`text-white font-medium ${
                  todo.completed ? "line-through text-zinc-500" : ""
                }`}
              >
                {todo.task}
              </h2>
              <button onClick={() => removeTodo(todo.id)}>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="text-neutral-500 hover:text-red-500 hover:bg-neutral-700 p-1 rounded-sm w-4 h-4"
                />
                {/* Adicionar icone lixeira */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
