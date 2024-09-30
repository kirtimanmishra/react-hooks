import React, { useState } from "react";

function HookObject() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  function submitFunction(event) {
    event.preventDefault();
    console.log("**** form ** ", name);
  }
  return (
    <div>
      <form action="" onSubmit={submitFunction}>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HookObject;
