import React, { useRef } from "react";
import axios from "axios";

export default function AddTodo() {
  const [addtodo, setAddtodo] = React.useState([]);
  const [tname, setTname] = React.useState("");

  const inputRef = useRef();

  const addTask = () => {
    axios
      .post("http://localhost:3000/Task", {
        tname: inputRef.current.value,
        id: Math.random().toString(),
      })
      .then((res) => {
        setAddtodo([res.data, ...addtodo]);
      });
    console.log(inputRef.current.value);
  };

  const deleteTask = (id) => {
    axios.delete("http://localhost:3000/Task/" + id).then((res) => {
      let data = addtodo.filter((item) => item.id !== id);
      setAddtodo(data);
    });
  };

  React.useEffect(() => {
    axios.get("http://localhost:3000/Task").then((res) => {
      setAddtodo(res.data);
    });
  }, []);

  return (
    <div>
      <div className="container-md mt-4 w-50   ">
        <div className="input-group p-4 mt-4">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Add Task"
            ref={inputRef}
          />
          <div className="input-group-append">
            <button
              className="btn  btn-success"
              onClick={addTask}
              type="button"
              onChange={(e) => setTname(e.target.value)}
            >
              Button
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="list-group mt-2">
            {addtodo.map((item) => (
              <h3
                key={item.id}
                className="list-group-item align-self-center w-50"
              >
                {item.tname}
                <div className="container-group-append">
                  <button
                    type="button"
                    onClick={() => deleteTask(item.id)}
                    className="float-end btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
