import styles from "./content.module.css";
import mainPhoto from "/mainPhoto.png";

const Content = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.text}>
          <div className={styles.headings}>
            <h2>Выбираешь универ?</h2>
            <h1>ТЕБЕ К НАМ!</h1>
          </div>
          <p className={styles.discription}>
            Хочешь найти наилучшее место для учебы быстро, <br />
            ведь совсем нет времени?{" "}
            <span className={styles.exclamation}>Здесь ты его найдешь!</span>
          </p>
          <button>НАЙТИ</button>
        </div>
        <img src={mainPhoto} alt=" mainPhoto" className={styles.mainPhoto} />
      </main>
    </>
  );
};

export default Content;
