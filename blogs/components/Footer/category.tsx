import { AiFillFolderOpen } from "react-icons/ai";
import styles from "./footer.module.css";
import { blogsStates } from "../../context/blogContext";
import { useRecoilValue } from "recoil";
import { blogObject } from "../../types/props/propsType";

export const Category = () => {
  const blogState = useRecoilValue(blogsStates);
  return (
    <>
      <ul className={styles.categoryList}>
        {blogState.value.map(({ category }: blogObject, index: number) => {
          return (
            <li key={index}>
              <span>
                <AiFillFolderOpen />
              </span>
              {category}
            </li>
          );
        })}
      </ul>
    </>
  );
};
