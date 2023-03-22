import styles from "./category.module.css";
import MainContainer from "../Container/main-container";
import CategoryItem from "./categoryItem";

const Category = () => {
  return (
    <section className={styles.categorySection}>
      <h1>
        CATEGORY<span className={styles.subTitle}>カテゴリー</span>
      </h1>
      <MainContainer>
        <div className={styles.categoryWrapper}>
          <CategoryItem title="転職" subTitle="JOB CHANGE" />
          <CategoryItem title="プログラミング" subTitle="PROGRAMMING" />
          <CategoryItem title="エンジニア" subTitle="ENGINEER" />
          <CategoryItem title="プライベート" subTitle="PRIVATE" />
        </div>
      </MainContainer>
    </section>
  );
};

export default Category;
