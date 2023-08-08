import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { NavButton } from "./NavButton";
import styles from "./header.module.css";
import type { headerProps } from "../../types/props/propsType";
import { memo } from "react";

export const Header = memo(({ isActive }: headerProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Logo />
          <Navigation />
          <NavButton />
        </div>
      </header>
      <header
        className={
          isActive
            ? `${styles.fixedHeader} ${styles.active}`
            : `${styles.fixedHeader} ${styles.notActive}`
        }
      >
        <div className={styles.headerWrapper}>
          <Logo />
          <Navigation />
          <NavButton />
        </div>
      </header>
    </>
  );
});

export default Header;
