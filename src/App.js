import React from "react";
/* components */
import InputClass from "./components/InputClass";
import InputFunc from "./components/InputFunc";
/* styles */
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <h3>クラスコンポーネント製</h3>
        <InputClass />
      </div>
      <div>
        <h3>関数コンポーネント製</h3>
        <InputFunc />
      </div>
    </div>
  );
}

export default App;
