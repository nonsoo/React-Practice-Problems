import "./App.css";

import { useState } from "react";
import ExpensiveChild from "./components/ExpensiveChild";

const App = () => {
  const [parentState1, setParentState1] = useState("State 1");
  const [parentState2, setParentState2] = useState("State 2");

  const handleChangeState1 = () => {
    setParentState1(`State 1 updated at ${new Date().toLocaleTimeString()}`);
  };

  const handleChangeState2 = () => {
    setParentState2(`State 2 updated at ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div className="wrapper">
      <div className="btns">
        <button className="btn" onClick={handleChangeState1}>
          Change State 1
        </button>
        <button className="btn" onClick={handleChangeState2}>
          Change State 2
        </button>
      </div>

      <h2>Normal Component</h2>
      <p className="result">{parentState1}</p>
      <ExpensiveChild state1={parentState2} />
    </div>
  );
};

export default App;
