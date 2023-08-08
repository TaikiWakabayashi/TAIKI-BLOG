import styles from "./category.module.css";
import CategorySection from "./categorySection";
import MainContainer from "../Container/main-container";
import CategoryTitle from "./categoryTitle";
import { memo, useEffect } from "react";
import type {
  categoryPageComponentProps,
  contentsType,
} from "../../types/props/propsType";
import WideButton from "../Button/widebutton";

const Category = memo(({ categoryName, index }: categoryPageComponentProps) => {
  return (
    <>
      <section
        className={
          index % 2 == 0
            ? `${styles.categorySection}`
            : `${styles.categorySection2}`
        }
      >
        <MainContainer>
          <CategoryTitle title={categoryName} subTitle="" />
          <CategorySection categoryName={categoryName} />
          <WideButton title="カテゴリ一覧へ" url="/" />
        </MainContainer>
      </section>
    </>
  );
});

export default Category;
