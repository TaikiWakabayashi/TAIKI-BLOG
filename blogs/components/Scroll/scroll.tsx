import styles from "./scroll.module.css";
import React from "react";

const Scroll = React.memo(() => {
  return (
    <div className={styles.scrollDown1}>
      <span>Scroll</span>
    </div>
  );
});

export default Scroll;
