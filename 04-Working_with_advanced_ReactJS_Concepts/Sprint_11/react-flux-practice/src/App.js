import React, { useEffect } from "react";

import { connect } from "react-redux";
import { addNum, subNum, reset } from "./actions/actions";

import AddTodo from "./components/AddTodo.js";
import TodoList from "./components/TodoList.js";

function App(props) {
  const { dispatch, visibleTodos } = props;
  return (
    <div className="h-screen w-screen bg-gray-800 grid place-content-center">
      <div className="h-96 rounded-lg p-5 flex justify-between flex-col items-center w-fit shadow-lg bg-gray-600">
        <TodoList todos={visibleTodos} />
        <AddTodo
          onReset={() => dispatch(reset())}
          onSub={() => dispatch(subNum())}
          onAdd={() => dispatch(addNum())}
        />
      </div>
    </div>
  );
}

function select(state) {
  return {
    visibleTodos: state.todos,
  };
}

export default connect(select)(App);
