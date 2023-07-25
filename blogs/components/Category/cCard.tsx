import styles from "./category.module.css";
import Logo from "/images/face-logo.jpg";
import Image from "next/image";

const CCard = () => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.topImgArea}>
        <Image src={Logo} alt="" />
      </div>
      <div>
        <p>
          <time>YEAR / MONTH / DAY</time>
        </p>
        <p>
          Description・Description・Description・Description・Description・Description・Description・Description・Description・Description
        </p>
      </div>
    </div>
  );
};

export default CCard;
