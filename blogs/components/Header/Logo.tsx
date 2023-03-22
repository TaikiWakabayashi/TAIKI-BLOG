import styles from "./header.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a className={styles.title} href="#">
        WAKA-BLOG
      </a>
    </div>
  );
};
