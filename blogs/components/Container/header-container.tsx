import { ReactNode } from "react";
import styles from "./container.module.css";
import React from "react";

type propsType = {
  children: ReactNode;
};

export const HeaderContainer = React.memo(({ children }: propsType) => {
  return <div className={styles.container}>{children}</div>;
});

export default HeaderContainer;
