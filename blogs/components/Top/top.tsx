import styles from "./top.module.css";
import Scroll from "../Scroll/scroll";
import Tops from "/images/Standing.jpg";
import Image from "next/image";

export const Top = () => {
  const style = {
    width: "500px",
    height: "500px",
  };
  return (
    <>
      <div className={styles.topArea}>
        <p className={styles.h1}>WAKA-BLOG</p>
        <div className={styles.subTitle}>
          <p className={styles.h2}>お金と転職のブログ</p>
          <p className={styles.h3}>career × money</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.shapeArea}>
            <svg
              style={style}
              viewBox="0 20 180 180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#5A8AD8"
                d="M36.9,-64.5C46.7,-58.2,52.9,-46.2,57.1,-34.5C61.2,-22.8,63.3,-11.4,61.1,-1.3C58.8,8.8,52.3,17.6,49.1,31C46,44.5,46.3,62.5,38.6,72.1C31,81.6,15.5,82.6,2.1,78.9C-11.2,75.2,-22.5,66.8,-33.3,59.1C-44.1,51.4,-54.5,44.4,-64.5,34.7C-74.6,25,-84.3,12.5,-84.4,-0.1C-84.5,-12.6,-75,-25.2,-65.5,-35.9C-56,-46.7,-46.6,-55.6,-35.7,-61.3C-24.8,-67,-12.4,-69.6,0.5,-70.6C13.5,-71.5,27,-70.8,36.9,-64.5Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className={styles.imageArea}>
            <Image src={Tops} alt="" />
          </div>
        </div>
      </div>
      <Scroll />
    </>
  );
};

export default Top;
