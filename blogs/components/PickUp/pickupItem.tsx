import styles from "./pickup.module.css";
import eyecatchImg from "/images/eyecatch2.jpg";
import Image from "next/image";

const PickupItem = () => {
  return (
    <div className={styles.pickupCard}>
      <div className={styles.cardWrapper}>
        <div className={styles.eyecatch}>
          <Image src={eyecatchImg} alt="" />
        </div>
        <h2>TITLE</h2>
        <p>YEAR: MONTH: DATE TIME</p>
      </div>
    </div>
  );
};

export default PickupItem;
