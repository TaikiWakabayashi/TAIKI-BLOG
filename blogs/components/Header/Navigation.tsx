import styles from "./header.module.css";
import Link from "next/link";
import { List } from "./List";
import { useToggleContext } from "./Header";

export const Navigation = () => {
  const { toggle } = useToggleContext();

  const listArr = [
    {
      categoryName: "転職",
      upper: "JOB CHANGE",
    },
    {
      categoryName: "プログラミング",
      upper: "PROGRAMMING",
    },
    {
      categoryName: "エンジニア",
      upper: "ENGINEER",
    },
    {
      categoryName: "プライベート",
      upper: "PRIVATE",
    },
  ];

  return (
    <div className={toggle ? `${styles.open} ${styles.nav}` : `${styles.nav}`}>
      <ul>
        {listArr.map((item) => {
          return (
            <List
              categoryName={item.categoryName}
              upper={item.upper}
              key={item.categoryName}
            />
          );
        })}
      </ul>
    </div>
  );
};
