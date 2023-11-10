import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout">
        <div className="form">
          <Form></Form>
        </div>
        <div className="preview"></div>
      </div>
    </>
  );
}

export default App;
