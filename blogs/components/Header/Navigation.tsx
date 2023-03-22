import styles from "./header.module.css";
import Link from "next/link";
import { useToggleContext } from "./Header";

export const Navigation = () => {
  const { toggle, setToggle } = useToggleContext();

  const closeNav = () => {
    setToggle(false);
  };

  return (
    <div className={toggle ? `${styles.open} ${styles.nav}` : `${styles.nav}`}>
      <ul>
        <li>
          <a href="#" onClick={closeNav}>
            転職
            <span className={styles.subTitle}>JOB CHANGE</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={closeNav}>
            プログラミング
            <span className={styles.subTitle}>PROGRAMMING</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={closeNav}>
            エンジニア
            <span className={styles.subTitle}>ENGINEER</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={closeNav}>
            プライベート
            <span className={styles.subTitle}>PRIVATE</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
