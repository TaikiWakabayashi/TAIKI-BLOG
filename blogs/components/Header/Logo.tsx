import { useEffect } from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { memo } from "react";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link className={styles.title} href="/">
        waka-blog
      </Link>
    </div>
  );
};
