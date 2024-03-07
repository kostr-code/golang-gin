import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/ui/Nav/Nav";
import Footer from "./components/ui/Footer/Footer";
import Content from "./components/ui/Content/Content";

function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/uni")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <Content />

      {loading ? (
        <p>Loading...</p>
      ) : (
        info.map((uni) => (
          <div key={uni.id}>
            <p>Название: {uni.name}</p>
            <p>Местоположение: {uni.location}</p>
            <p>Год основания: {uni.established}</p>
            <p>Страна: {uni.country}</p>
            <p>Город: {uni.city}</p>
            <p>Основной язык: {uni.main_language}</p>
            <p>Средняя стоимость: {uni.avg_price}</p>
            <img src={uni.photo} alt="university photo" />
          </div>
        ))
      )}
      <Footer />
    </>
  );
}

export default App;
