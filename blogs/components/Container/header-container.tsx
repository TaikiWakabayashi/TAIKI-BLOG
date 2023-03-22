import { ReactNode } from "react";
import styles from "./container.module.css";

type propsType = {
  children: ReactNode;
};

export const HeaderContainer = ({ children }: propsType) => {
  return <div className={styles.container}>{children}</div>;
};

export default HeaderContainer;
