import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function Todos({ id, completed, task, toggleComplete, removeTodo }) {
  return (
    <div key={id} className="w-1/2 mb-3">
      <div
        className="bg-zinc-800 border-none outline-none rounded-lg p-4 flex
          items-center shadow-sm shadow-zinc-950 justify-between relative"
      >
        <input
          className="cursor-pointer appearance-none border-2 w-4 h-4 rounded-xl border-sky-400 hover:border-sky-400/60 hover:bg-sky-500/15 checked:bg-violet-400/85 checked:border-0 checked:hover:bg-violet-400 peer mr-3"
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
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
            completed ? "line-through text-zinc-500" : ""
          }`}
        >
          {task}
        </h2>
        <button onClick={() => removeTodo(id)}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="text-neutral-500 hover:text-red-500 hover:bg-neutral-700 p-1 rounded-sm w-4 h-4"
          />
        </button>
      </div>
    </div>
  );
}
