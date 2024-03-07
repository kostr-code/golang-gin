import styles from "./content.module.css";
import mainPhoto from "/mainPhoto.png";
import Scroller from "../../utils/Scroller";
import Search from "../Search/Search";
import Card from "../Card/Card";
import React, { useState, useEffect } from "react";

const Content = () => {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/uni")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
        setFilteredInfo(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    const filteredData = info.filter((card) =>
      card.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredInfo(filteredData);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.firstcontainer}>
          <div className={styles.text}>
            <div className={styles.headings}>
              <h2>Выбираешь универ?</h2>
              <h1>ТЕБЕ К НАМ!</h1>
            </div>
            <p className={styles.discription}>
              Хочешь найти наилучшее место для учебы быстро, <br />
              ведь совсем нет времени?
              <span className={styles.exclamation}> Здесь ты его найдешь!</span>
            </p>
            <button onClick={Scroller}>НАЙТИ</button>
          </div>
          <img src={mainPhoto} alt=" mainPhoto" className={styles.mainPhoto} />
        </div>
        <div className={styles.secondContainer} id="catalog">
          <Search onSearch={handleSearch} search={search} />
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {filteredInfo.length === 0 ? (
                <h2>Ничего не найдено...</h2>
              ) : (
                <section className={styles.list}>
                  {filteredInfo.map((card, index) => (
                    <Card card={card} key={index} />
                  ))}
                </section>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Content;
