import "./App.css";
import { useState } from "react";

export default function App() {
  const [buttons, setButtons] = useState([]);
  const [last, Setlast] = useState(0);
  const lastClicked = (btn) => {
    Setlast(btn);
  };
  const inc = () => {
    setButtons([...buttons, `Button ${buttons.length + 1}`]);
  };

  return (
    <div className="container">
      <div className="btn-wrapper">
        <h2>Counter-{buttons.length}</h2>
        <h2>Last Button Clicked-{last} </h2>
      </div>

      <button onClick={inc}>Add Button </button>

      {buttons.map((btn) => (
        <button onClick={() => lastClicked(buttons.indexOf(btn) + 1)} key={btn}>
          {btn}
        </button>
      ))}
    </div>
  );
}
