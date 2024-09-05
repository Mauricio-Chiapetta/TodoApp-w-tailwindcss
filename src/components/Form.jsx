import { useState } from "react";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Form({ addTodos }) {
  const [task, setTask] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (task.trim()) {
      addTodos(task);
      setTask("");
    }
  };
  return (
    <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center p-4">
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
  );
}
