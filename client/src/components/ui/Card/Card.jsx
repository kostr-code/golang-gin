import styles from "./card.module.css";

const Card = ({ card }) => {
  const {
    name,
    id,
    location,
    established,
    country,
    city,
    main_language,
    avg_price,
    photo,
  } = card;

  return (
    <>
      <div className={styles.card}>
        <img src={photo} alt="photo" className={styles.photo} />
        <div className={styles.discription}>
          <h3>{name}</h3>
          <div className={styles.info}>
            <p>Местоположение: {location}</p>
            <p>Основан в: {established}</p>
            <p>Страна: {country}</p>
            <p>Город: {city}</p>
            <p>Язык: {main_language}</p>
            <p>Средняя стоимость: {avg_price} руб/год</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
