import React, { useEffect, useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState("");

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Use effect: updating document title");
  }, [count]);
  //  In order to conditionally render an effect, pass the 2nd parameter, which is array.
  // Pass state and props to the array which need to watch for, If they change effect will be executed.

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={incrementCount}>Count {count} </button>
    </div>
  );
}

export default HookCounter2;
