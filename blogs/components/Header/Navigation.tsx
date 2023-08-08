import styles from "./header.module.css";
import { List } from "./List";
import { useRecoilValue } from "recoil";
import { toggleState } from "../../context/toggleContext";

export const Navigation = () => {
  const toggle = useRecoilValue(toggleState);

  const listArr = [
    {
      categoryName: "ホーム",
      upper: "Home",
      link: "/",
    },
    {
      categoryName: "私について",
      upper: "About Me",
      link: "/",
    },
    {
      categoryName: "ポートフォリオ",
      upper: "Portfolio",
      link: "/",
    },
    {
      categoryName: "ブログ",
      upper: "Blog",
      link: "/blog",
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
              link={item.link}
              key={item.categoryName}
            />
          );
        })}
      </ul>
    </div>
  );
};
