import Link from "next/link";
import styles from "./button.module.css";
import React from "react";

type propsType = {
  title: string;
  url: string;
};

const WideButton = React.memo(({ title, url }: propsType) => {
  return (
    <div className={styles.btnArea}>
      <Link href={url} className={styles.wideButton}>
        <span>{title}</span>
      </Link>
    </div>
  );
});

export default WideButton;
