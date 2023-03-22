import styles from "./newpost.module.css";
import Logo from "/images/face-logo.jpg";
import Image from "next/image";

const PostItem = () => {
  return (
    <li className={styles.postItem}>
      <div className={styles.postItemGrid}>
        <div className={styles.postImgs}>
          <Image src={Logo} alt="" />
        </div>
        <div className={styles.postExp}>
          <h2>TITLE</h2>
          <p>DATE: TIME: MINUTE</p>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
