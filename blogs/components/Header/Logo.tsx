import styles from "./header.module.css";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.title} href="/">
        waka-blog
      </Link>
    </div>
  );
};
