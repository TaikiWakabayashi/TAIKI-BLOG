import styles from "./footer.module.css";
import { useRecoilValue } from "recoil";
import { convertDateStates } from "../../context/blogContext";
import { useRouter } from "next/router";

const Archive = () => {
  const convertDates = useRecoilValue(convertDateStates);
  console.log("--- convertDates ---");
  console.log(convertDates);

  const router = useRouter();

  return (
    <div className={styles.InputArea}>
      <select
        className={styles.pullDown}
        onChange={(e) => router.push(`/blog/archives/${e.target.value}`)}
      >
        <option>月を選択</option>
        {convertDates.map((month) => {
          return (
            <option key={month} value={month}>
              {month}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Archive;
