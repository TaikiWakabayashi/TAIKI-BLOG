import styles from "./title.module.css";

export const PageTitle = ({ title }: { title: string }) => {
  return <h1 className={styles.pageTitle}>{title}</h1>;
};
