import React, { useReducer } from "react";

// useReducer accepts 2 args. Reducer function and initialstate. Returns [newState and dispatch]
// reducer function accepts 2 args. currentState and action. Returns newState
const firstCounter = {
  value: 0,
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + action.value };
    case "decrement":
      return { value: state.value - action.value };
    case "reset":
      return firstCounter;
    default:
      return state;
  }
};

function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer1, firstCounter);

  return (
    <div>
      <div>Count: {count.value}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerCounter;
