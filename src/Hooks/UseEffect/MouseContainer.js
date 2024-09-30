import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toogle display</button>
      <div>{display ? <p>True</p> : <p>False</p>}</div>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
