import styles from "./contentStyle.module.css";
import { useEffect } from "react";

// type propsType = {
//   children: ReactNode;
// };

export const PostBody = ({ children }) => {
  return <div className={styles.stack}>{children}</div>;
};
