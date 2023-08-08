import { useState } from "react";
import styles from "./header.module.css";
import { memo } from "react";
import { useRecoilState, useRecoilCallback } from "recoil";
import { toggleState } from "../../context/toggleContext";

export const NavButton = () => {
  const [toggle, setToggle] = useRecoilState(toggleState);
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
