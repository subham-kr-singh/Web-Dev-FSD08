import React, { useState } from "react";

function App() {
  const [myVar, setMyVar] = useState(0);
  return (
    <>
      <h1>value of {myVar}</h1>

      <input
        type="number"
        name="num"
        className="form-control"
        onChange={(event) => {
          setMyVar(event.target.value);
        }}
      />
    </>
  );
}

export default App;
