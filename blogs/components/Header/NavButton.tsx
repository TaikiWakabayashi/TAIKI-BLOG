import { useState } from "react";
import styles from "./header.module.css";
import { useToggleContext } from "./Header";

export const NavButton = () => {
  const { toggle, setToggle } = useToggleContext();

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div
      className={
        toggle
          ? `${styles.open} ${styles.btn}`
          : `${styles.close} ${styles.btn}`
      }
      onClick={toggleNav}
    >
      <span className={styles.bar}></span>
    </div>
  );
};
