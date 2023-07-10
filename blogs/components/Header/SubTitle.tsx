import styles from "./header.module.css";

type props = {
  title: string;
};

export const SubTitle = ({ title }: props) => {
  return <span className={styles.subTitle}>{title}</span>;
};
