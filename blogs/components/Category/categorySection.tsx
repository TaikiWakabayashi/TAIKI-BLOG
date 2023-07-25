import MainContainer from "../Container/main-container";
import CategoryTitle from "./categoryTitle";
import CCard from "./cCard";
import styles from "./category.module.css";
import WideButton from "../Button/widebutton";

type propsType = {
  title: string;
  subTitle: string;
};

const CategorySection = ({ title, subTitle }: propsType) => {
  return (
    <MainContainer>
      <CategoryTitle title={title} subTitle={subTitle} />
      <div>
        <div className={styles.categoryWrapper}>
          <CCard />
          <CCard />
          <CCard />
          <CCard />
        </div>
        <WideButton title="SEE MORE" />
      </div>
    </MainContainer>
  );
};

export default CategorySection;
