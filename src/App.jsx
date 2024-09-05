import { useState } from "react";
import Navbar from "./components/Navbar";
import { useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const completeRef = useRef(null);

  const addTodos = (task) => {
    const id = Math.floor(Math.random() * 1000000);
    const newTodo = { id, task, completed: false };
    setTodos((state) => [newTodo, ...state]);
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
      <div className="relative"> {/* Container com posição relativa */}
        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center p-4 ">
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
              className="bg-zinc-800 border-none text-white placeholder-zinc-700 outline-none focus:border-purple-800 focus:ring-1 focus:ring-violet-400 rounded-lg px-2 py-3 mr-2 w-5/12"
            />
            <button className="bg-sky-600 hover:bg-sky-500 text-white p-5 py-3 rounded-lg font-semibold">Criar<span>+</span></button>
          </form>
        </div> 

        <div className="pt-20"> {/* Espaço adicional para evitar sobreposição do conteúdo */}
          {todos.map((todo) => (
            <div key={todo.id}>
              <div>
                <input
                  type="checkbox" 
                  ref={completeRef}
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <h2
                  className={`text-white ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.task}
                </h2>
                <button onClick={() => removeTodo(todo.id)}>Remover</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
