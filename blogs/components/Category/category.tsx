import styles from "./category.module.css";
import CategorySection from "./categorySection";

type propsType = {
  title: string;
  subTitle: string;
  index: number;
};

const Category = ({ title, subTitle, index }: propsType) => {
  const isEven: boolean = index % 2 == 0;
  return (
    <>
      {isEven ? (
        <section className={styles.categorySection2}>
          <CategorySection title={title} subTitle={subTitle} />
        </section>
      ) : (
        <section className={styles.categorySection}>
          <CategorySection title={title} subTitle={subTitle} />
        </section>
      )}
    </>
  );
};

export default Category;
