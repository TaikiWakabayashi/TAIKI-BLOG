import styles from "./top.module.css";
import Scroll from "../Scroll/scroll";
import Tops from "/images/WAKA-BLOG.jpg";
import Image from "next/image";

export const Top = () => {
  return (
    <>
      <div className={styles.topArea}>
        <div className={styles.topImgBorder}>
          <span className={styles.topImgStripe}></span>
          <div className={styles.imgArea}>
            <Image src={Tops} alt="" />
          </div>
        </div>
        <Scroll />
      </div>
    </>
  );
};

export default Top;
