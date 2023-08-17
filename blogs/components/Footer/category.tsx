import { AiFillFolderOpen } from "react-icons/ai";
import styles from "./footer.module.css";
import { blogsStates } from "../../context/blogContext";
import { useRecoilValue } from "recoil";
import { blogObject } from "../../types/props/propsType";
import Link from "next/link";

export const Category = () => {
  const blogState = useRecoilValue(blogsStates);
  console.log("--- blogState ---");
  console.log(blogState);
  return (
    <>
      <ul className={styles.categoryList}>
        {blogState.value.map(({ id, category }: blogObject, index: number) => {
          return (
            <li key={index} className={styles.categoryItem}>
              <Link href={`/blog/categories/${id}`}>
                <span>
                  <AiFillFolderOpen />
                </span>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
