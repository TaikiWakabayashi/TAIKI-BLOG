import { ReactNode } from "react";
import styles from "./container.module.css";
import React from "react";

type propsType = {
  children: ReactNode;
};

const MainContainer = React.memo(({ children }: propsType) => {
  return <div className={styles.mainContainer}>{children}</div>;
});

export default MainContainer;
