import styles from "./top.module.css";
import Scroll from "../Scroll/scroll";
import Tops from "/images/Standing.png";
import Image from "next/image";

export const Top = () => {
  const bYellow = {
    backgroundColor: "#f0eb45",
  };
  const yellow = {
    color: "#f0eb45",
  };
  const blue = {
    color: "#5a8ad8",
  };
  return (
    <div style={bYellow}>
      <div className={styles.topArea}>
        <div className={styles.titleArea}>
          <p className={styles.h1}>waka-blog</p>
          <div className={styles.subTitle}>
            <p className={styles.h2}>
              <span style={yellow}>お金</span>と<span style={blue}>転職</span>
              のブログ
            </p>
            <p className={styles.h3}>
              <span style={yellow}>money</span> ×{" "}
              <span style={blue}>career</span>
            </p>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.spacer}></div>
          <div className={styles.imageArea}>
            <Image src={Tops} alt="" />
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
};

export default Top;
