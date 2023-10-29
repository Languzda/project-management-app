import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAddProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    console.log(title, description, dueDate);
    onAddProject({ title, description, dueDate });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input ref={descriptionRef} label="Description" textrea />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
