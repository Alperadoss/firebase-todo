import React from "react";
import "./App.css";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
};
function App() {
  return (
    <div className={style.bg}>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
