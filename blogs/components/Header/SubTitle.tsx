import { memo } from "react";
import styles from "./header.module.css";

type props = {
  title: string;
};

export const SubTitle = memo(({ title }: props) => {
  return <span className={styles.subTitle}>{title}</span>;
});
