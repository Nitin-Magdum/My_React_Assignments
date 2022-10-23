import "./styles.css";
import { useReducer } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "ADD":
        return { count: state.count + 1 };
      case "SUB":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <h3>Counter</h3>
      <h3>{state.count}</h3>

      <div>
        <button onClick={() => dispatch({ type: "ADD" })}>Increase</button>

        <button onClick={() => dispatch({ type: "SUB" })}>Decrease </button>

        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
