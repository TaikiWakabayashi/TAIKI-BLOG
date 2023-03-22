import styles from "./newpost.module.css";
import Logo from "/images/face-logo.jpg";
import Image from "next/image";

const LatestPost = () => {
  return (
    <div className={styles.latestPost}>
      <div className={styles.pickupPostCard}>
        <div className={styles.pickupItem}>
          <div className={styles.pickupImg}>
            <Image src={Logo} alt="" />
          </div>
          <h2>タイトル</h2>
          <p>説明</p>
          <p>2023年3月16日</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
