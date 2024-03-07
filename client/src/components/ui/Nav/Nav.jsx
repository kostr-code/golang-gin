import styles from "./nav.module.css";
import profile from "/profile.png";

const Nav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h2 className={styles.logo}>BestUnis</h2>
        <img src={profile} alt="profile" className={styles.profile} />
      </nav>
    </>
  );
};

export default Nav;
