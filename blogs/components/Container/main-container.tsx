import { ReactNode } from "react";
import styles from "./container.module.css";

type propsType = {
  children: ReactNode;
};

const MainContainer = ({ children }: propsType) => {
  return <div className={styles.mainContainer}>{children}</div>;
};

export default MainContainer;
