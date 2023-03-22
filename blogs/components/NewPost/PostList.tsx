import styles from "./newpost.module.css";
import PostItem from "./PostItem";

const PostList = () => {
  return (
    <>
      <ul className={styles.postList}>
        <PostItem />
        <PostItem />
        <PostItem />
      </ul>
    </>
  );
};

export default PostList;
