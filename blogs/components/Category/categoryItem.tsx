import styles from "./category.module.css";
import Logo from "/images/face-logo.jpg";
import Image from "next/image";
import { MiddleButton } from "../Button/middle-button";

type propsType = {
  title: string;
  subTitle: string;
};

const CategoryItem = ({ title, subTitle }: propsType) => {
  return (
    <div className={styles.categoryCard}>
      <h2 className={styles.genre}>
        {title}
        <span className={styles.genreSub}>{subTitle}</span>
      </h2>
      <div className={styles.topImgArea}>
        <Image src={Logo} alt="" />
      </div>
      <ul className={styles.categoryList}>
        <li className={styles.list}>タイトル</li>
        <li className={styles.list}>タイトル</li>
        <li className={styles.list}>タイトル</li>
        <li className={styles.list}>タイトル</li>
        <li className={styles.list}>タイトル</li>
        <li className={styles.list}>タイトル</li>
      </ul>

      <MiddleButton title={title}></MiddleButton>
    </div>
  );
};

export default CategoryItem;
