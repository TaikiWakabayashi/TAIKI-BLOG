import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { NavButton } from "./NavButton";
import styles from "./header.module.css";
import { createContext, useContext } from "react";
import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

export const ToggleContext = createContext(
  {} as { toggle: boolean; setToggle: Dispatch<SetStateAction<boolean>> }
);

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Logo />
        <ToggleContext.Provider value={{ toggle, setToggle }}>
          <Navigation />
          <NavButton />
        </ToggleContext.Provider>
      </div>
    </header>
  );
};

export default Header;

export const useToggleContext = () => {
  return useContext(ToggleContext);
};
