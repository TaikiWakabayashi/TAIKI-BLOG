import styles from "./pickup.module.css";
import MainContainer from "../Container/main-container";
import PickupItem from "./pickupItem";
import WideButton from "../Button/widebutton";

const PickUp = () => {
  return (
    <section className={styles.pickupSection}>
      <h1>
        PICK UP<span className={styles.subTitle}>おすすめ投稿</span>
      </h1>
      <MainContainer>
        <div className={styles.pickupWrapper}>
          <PickupItem />
        </div>
        <WideButton title="記事一覧へ" url="/blog" />
      </MainContainer>
    </section>
  );
};

export default PickUp;
