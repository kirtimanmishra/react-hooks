import React, { useReducer } from "react";

// useReducer accepts 2 args. Reducer function and initialstate. Returns [newState and dispatch]
// reducer function accepts 2 args. currentState and action. Returns newState
const firstCounter = {
  counter1: 0,
  counter2: 10,
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter1: state.counter1 + action.value };
    case "decrement":
      return { ...state, counter1: state.counter1 - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    case "reset":
      return firstCounter;
    default:
      return state;
  }
};

function UseReducerCounter1() {
  const [count, dispatch] = useReducer(reducer1, firstCounter);

  return (
    <div>
      <div>Counter 1: {count.counter1}</div>
      <div>Counter 2: {count.counter2}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment Counter1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement Counter1
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        Increment Counter2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        Decrement Counter2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerCounter1;
