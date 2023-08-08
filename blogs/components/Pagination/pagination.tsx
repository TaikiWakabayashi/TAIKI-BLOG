import Link from "next/link";

export const Pagination = ({ totalCount }: any) => {
  const PER_PAGE = 9;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          {number == 1 ? (
            <Link href={`/blog`}>{1}</Link>
          ) : (
            <Link href={`/blog/page/${number}`}>{number}</Link>
          )}
          {/* <Link href={`/blog/page/${number}`}>{number}</Link> */}
        </li>
      ))}
    </ul>
  );
};
