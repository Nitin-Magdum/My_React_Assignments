import { useContext } from "react";
import { TodoContext } from "./Todo-context";
import "bootstrap/dist/css/bootstrap.min.css";

const Entry = (props) => {
  const { handleDelete } = useContext(TodoContext);
  return (
    <div>
      <h4>{props.entry.description}</h4>
      <button onClick={() => handleDelete(props.entry.id)}>Delete</button>
    </div>
  );
};
export default Entry;
