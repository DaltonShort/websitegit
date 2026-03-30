import React, { useState } from "react";

function HomeAdmin() {
  // Example: editable welcome message
  const [welcome, setWelcome] = useState("Welcome to the home page!");
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(welcome);

  const handleSave = () => {
    setWelcome(input);
    setEdit(false);
    // TODO: Persist to backend or localStorage if needed
  };

  return (
    <div>
      <h2>Home Page Content Management</h2>
      {edit ? (
        <div>
          <textarea value={input} onChange={e => setInput(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{welcome}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default HomeAdmin;
