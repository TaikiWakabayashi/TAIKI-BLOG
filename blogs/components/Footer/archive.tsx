import styles from "./footer.module.css";

const monthArr = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

const Archive = () => {
  return (
    <div className={styles.InputArea}>
      <select className={styles.pullDown}>
        <option>月を選択</option>
        {monthArr.map((month) => {
          return <option key={month}>{month}</option>;
        })}
      </select>
    </div>
  );
};
export default Archive;
