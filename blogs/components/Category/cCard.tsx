import styles from "./category.module.css";
import Image from "next/legacy/image";
import { contentsType } from "../../types/props/propsType";
import ConvertDate from "../Date/convertDate";
import Link from "next/link";

const CCard = ({
  title,
  publishDate,
  eyecatch,
  slug,
}: Pick<contentsType, "title" | "publishDate" | "eyecatch" | "slug">) => {
  return (
    <div className={styles.categoryCard}>
      <Link href={`/blog/${slug}`}>
        <div className={styles.topImgArea}>
          <Image
            src={eyecatch.url}
            alt=""
            width={eyecatch.width}
            height={eyecatch.height}
            layout="responsive"
          />
        </div>
        <div className={styles.desc}>
          <p>
            <ConvertDate dateISO={publishDate} />
          </p>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CCard;
