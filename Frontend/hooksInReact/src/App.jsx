import React, { useState } from "react";

function App() {
  const [myVar, setMyVar] = useState(0);
  const [userName, setUserName] = useState("");
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

      {/* <h1>UserName = {userName}</h1> */}

      <input
        type="text"
        name="userName"
        className="form-input"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    </>
  );
}

export default App;
