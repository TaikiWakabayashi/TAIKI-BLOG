import styles from "./pickup.module.css";
import MainContainer from "../Container/main-container";
import PickupItem from "./pickupItem";
import WideButton from "../Button/widebutton";

const PickUp = () => {
  return (
    <section className={styles.pickupSection}>
      <h1>
        PICKUP<span className={styles.subTitle}>おすすめ投稿</span>
      </h1>
      <MainContainer>
        <div className={styles.pickupList}>
          <PickupItem />
          <PickupItem />
          <PickupItem />
          <PickupItem />
          <PickupItem />
          <PickupItem />
        </div>
      </MainContainer>
    </section>
  );
};

export default PickUp;
