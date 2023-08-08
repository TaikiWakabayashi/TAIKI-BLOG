import styles from "./newpost.module.css";
import PostItem from "./PostItem";
import { useRecoilValue } from "recoil";
import { newPostStates } from "../../context/blogContext";

const PostList = () => {
  const newPostState = useRecoilValue(newPostStates);
  return (
    <>
      <ul className={styles.postList}>
        {newPostState.map((content, index) => {
          if (index !== 0) {
            return <PostItem contents={content} key={index} />;
          }
        })}
      </ul>
    </>
  );
};

export default PostList;
