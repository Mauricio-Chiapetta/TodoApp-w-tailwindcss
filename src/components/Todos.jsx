import { useState } from "react";
import { faTrashCan, faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Todos({
  id,
  completed,
  task,
  toggleComplete,
  removeTodo,
  updateTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true); // Ativar o modo de edição
  };

  const handleSave = () => {
    if (editedTask.trim()) {
      updateTodo(id, { task: editedTask }); // Atualizar a tarefa
    }
    setIsEditing(false); // Desativar o modo de edição
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

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
          className="absolute w-2 h-3 ml-1 text-white hidden peer-checked:block pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>

        {isEditing ? (
          <input
            className="bg-zinc-800 border-none text-white placeholder-zinc-500 font-medium outline-none focus:border-purple-800 focus:ring-1 focus:ring-violet-400 rounded-lg px-2 py-0 mr-2 w-5/12 shadow-lg"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <h2
            className={`text-white font-medium ${
              completed ? "line-through text-zinc-500" : ""
            }`}
          >
            {task}
          </h2>
        )}

        <div>
          
          {/* Botão de editar */}
          {!completed && !isEditing &&(
            <button onClick={handleEdit}>
              <FontAwesomeIcon
                icon={faPenSquare}
                className="text-neutral-500 hover:text-yellow-400 hover:bg-neutral-700 p-1 rounded-sm w-4 h-4"
              />
            </button>
          )}

          {/* Botão de excluir */}
          <button onClick={() => removeTodo(id)}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className="text-neutral-500 hover:text-red-500 hover:bg-neutral-700 p-1 rounded-sm w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
