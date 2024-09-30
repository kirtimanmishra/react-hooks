import React, { useEffect, useState } from "react";

function HookCounter1() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    // Useeffect has a parameter, which is a function which gets executed after every render of the component
    // It runs both after first render and after every update
    // Use effect is placed inside the component, we can easily access components state and props
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={incrementCount}>Count {count} </button>
    </div>
  );
}

export default HookCounter1;
