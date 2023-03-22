import Link from "next/link";
import styles from "./button.module.css";

type propsType = {
  title: string;
};

const WideButton = ({ title }: propsType) => {
  return (
    <a href="#" className={styles.wideButton}>
      {title}
    </a>
  );
};

export default WideButton;
