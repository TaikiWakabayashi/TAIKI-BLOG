import styles from "./category.module.css";

type propsType = {
  title: string;
  subTitle: string;
};

const CategoryTitle = ({ title, subTitle }: propsType) => {
  return (
    <h2 className={styles.genre}>
      {title}
      <span className={styles.genreSub}>{subTitle}</span>
    </h2>
  );
};

export default CategoryTitle;
