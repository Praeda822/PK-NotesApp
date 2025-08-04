// A Controlled Input is a form element (like a text field or select box) whose value is managed by React State
// Meaning, instead of the browser keeping track of the value, React does instead, so every change updates the state, and that state controls what is shown in the input

import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");

  return (
    <div>
      {/* value={name} binds the input to state */}
      {/* onChange={..} updates the state when the input changes */}
      {/* {name} reflects the live chanegs below the input */}
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is {name}</p>
    </div>
  );
};

export default ControlledInputs;
