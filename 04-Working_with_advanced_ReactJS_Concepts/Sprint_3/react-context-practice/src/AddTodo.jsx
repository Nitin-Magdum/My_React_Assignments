import { useContext } from "react";
import { TodoContext } from "./Todo-context";

const AddTodo = () => {
  const { handleAdd, setTask, task } = useContext(TodoContext);
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <form id="myform">
        <input
          type="text"
          id="todo"
          name="todo"
          value={task}
          placeholder="Enter a todo"
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add Todo</button>
      </form>
    </>
  );
};
export default AddTodo;
