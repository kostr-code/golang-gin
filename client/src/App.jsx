import { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState([]);

  const getInfo = () => {
    fetch("http://localhost:3000/api/uni")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <button onClick={getInfo}>получить данные</button>
        {info.map((uni) => (
          <div key={uni.id}>
            <p>Название: {uni.name}</p>
            <p>Местоположение: {uni.location}</p>
            <p>Год основания: {uni.established}</p>
            <p>Страна: {uni.country}</p>
            <p>Город: {uni.city}</p>
            <p>Основной язык: {uni.main_language}</p>
            <p>Средняя стоимость: {uni.avg_price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
