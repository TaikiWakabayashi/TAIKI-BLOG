import styles from "./header.module.css";
import ConvertDate from "../Date/convertDate";

type props = {
  title: string;
  subTitle: string;
  publish: string;
};

export const PostHeader = ({ title, subTitle, publish = "" }: props) => {
  return (
    <div className={styles.pHeaderWrapper}>
      <p className={styles.subTitle}>{subTitle}</p>
      <h1 className={styles.title}>{title}</h1>
      <ConvertDate dateISO={publish} />
    </div>
  );
};

export default PostHeader;
