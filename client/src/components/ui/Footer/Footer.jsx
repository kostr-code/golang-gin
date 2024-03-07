import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.contact}>
          <p>Тел: +7 000 000 00 00</p>
          <p>Email: project2024@yandex.ru</p>
          <p className={styles.copyright}>© 2024</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
