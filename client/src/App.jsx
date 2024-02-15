import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState(null);

  const getInfo = () => {
    fetch("http://localhost:3000/api/uni")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={getInfo}>получить данные</button>
      <div>
        {info && (
          <>
            <p>EngName: {info.EngName}</p>
            <p>Fullname: {info.Fullname}</p>
            <p>Name: {info.Name}</p>
            <p>Name: {info.Photo}</p>
            <img src={info.Photo} alt="card" />
          </>
        )}
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
