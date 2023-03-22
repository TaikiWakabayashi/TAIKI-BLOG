import styles from "./button.module.css";

type propsType = {
  title: string;
};
export const MiddleButton = ({ title }: propsType) => {
  return <button className={styles.btn}>{`${title}一覧`}</button>;
};
