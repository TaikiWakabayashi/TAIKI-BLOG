import Link from "next/link";
import styles from "./pagination.module.css";

export const Pagination = ({ totalCount, id = 0 }: any) => {
  const PER_PAGE = 9;

  console.log(id);
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className={styles.pagination}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className={styles.pageBtn}>
          <Link
            href={`/blog/page/${number}`}
            className={id == number ? styles.active : styles.inactive}
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};
