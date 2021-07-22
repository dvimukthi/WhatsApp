import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming conversation
    <div className="app">
      <div className="app__body">
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
