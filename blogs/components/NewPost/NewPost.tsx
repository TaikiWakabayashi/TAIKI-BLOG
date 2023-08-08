import styles from "./newpost.module.css";
import MainContainer from "../Container/main-container";
import LatestPost from "./LatestPost";
import PostList from "./PostList";
import WideButton from "../Button/widebutton";

const NewPost = () => {
  return (
    <section className={styles.newpostSection}>
      <h1 className={styles.title}>
        NEW POSTS<span className={styles.subTitle}>新着情報</span>
      </h1>
      <div className={styles.triangle}></div>
      <MainContainer>
        <div className={styles.postWrapper}>
          <LatestPost />
          <PostList />
        </div>
        <WideButton title="記事一覧へ" url="/blog" />
      </MainContainer>
    </section>
  );
};

export default NewPost;
