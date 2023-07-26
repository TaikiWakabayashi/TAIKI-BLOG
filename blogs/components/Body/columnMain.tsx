import type { childrenProps } from "../../types/props/propsType";
import styles from "./column.module.css";

export const ColumnMain = ({ children }: childrenProps) => {
  return <div className={styles.main}>{children}</div>;
};
