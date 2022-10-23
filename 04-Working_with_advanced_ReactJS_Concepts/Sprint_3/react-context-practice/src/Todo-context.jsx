import "./dark.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";

const { createContext, useState } = require("react");

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [darktheme, setDarktheme] = useState(false);
  const [count, setCount] = useState(4);
  const [task, setTask] = useState();
  const [item, setitem] = useState([
    {
      id: 1,
      description: "Go to Gym"
    },
    {
      id: 2,
      description: "Breakfast"
    },
    {
      id: 3,
      description: "Commute"
    }
  ]);
  useEffect(() => {
    //setDarktheme(!darktheme);
    switch (darktheme) {
      case true:
        document.body.classList.add("dark-content");
        document.body.classList.add("bg-dark");
        let inp = document.getElementById("todo");
        inp.classList.add("inputClass");
        let buttons = document.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.add("buttonClass");
        }
        break;
      default:
        document.body.classList.remove("dark-content");
        document.body.classList.remove("bg-dark");
        let inp1 = document.getElementById("todo");
        inp1.classList.remove("inputClass");
        let buttons1 = document.getElementsByTagName("button");
        for (let i = 0; i < buttons1.length; i++) {
          buttons1[i].classList.remove("buttonClass");
        }
    }
  }, [darktheme]);

  const handleAdd = (event) => {
    event.preventDefault();
    if (task === "") return;
    setCount(count + 1);
    setitem([...item, { id: count, description: task }]);
    setTask("");
  };
  const handleDelete = (id) => {
    setitem(item.filter((entry) => entry.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{
        darktheme,
        setDarktheme,
        item,
        task,
        setTask,
        handleAdd,
        handleDelete
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
