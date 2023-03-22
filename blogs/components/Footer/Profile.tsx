import styles from "./footer.module.css";

const Profile = () => {
  return (
    <>
      <div className={styles.topImg}>
        <div className={styles.topEyecatch}></div>
      </div>
      <div className={styles.profileExp}>
        <ul>
          <li>BIRTH: 1996.5.21</li>
          <li>FROM: SHIZUOKA</li>
          <li>WORK: ENGINEER</li>
          <li>AGE: 27</li>
          <li>LIVE: TOKYO</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
