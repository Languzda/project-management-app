import React, { useState, useContext } from "react";
import { ProjectsContext } from "../store/ProjectsContextProvider";

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState("");

  const { onAddTask: onAdd } = useContext(ProjectsContext);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim().length === 0) {
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-900 "
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
