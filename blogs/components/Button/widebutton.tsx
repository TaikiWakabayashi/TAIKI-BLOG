import Link from "next/link";
import styles from "./button.module.css";

type propsType = {
  title: string;
};

const WideButton = ({ title }: propsType) => {
  return (
    <Link href="#" className={styles.wideButton}>
      {title}
    </Link>
  );
};

export default WideButton;
