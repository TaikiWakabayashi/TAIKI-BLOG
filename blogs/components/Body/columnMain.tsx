import type { childrenProps } from "../../types/props/propsType";
import styles from "./column.module.css";
import React from "react";

export const ColumnMain = React.memo(({ children }: childrenProps) => {
  return <div className={styles.main}>{children}</div>;
});
