import { AiFillFolderOpen } from "react-icons/ai";
import styles from "./footer.module.css";

const categoryArr = ["転職", "プログラミング", "エンジニア", "プライベート"];

export const Category = () => {
  return (
    <>
      <ul className={styles.categoryList}>
        {categoryArr.map((arr) => {
          return (
            <li key={arr}>
              <span>
                <AiFillFolderOpen />
              </span>
              {arr}
            </li>
          );
        })}
      </ul>
    </>
  );
};
