import styles from "./newpost.module.css";
import Image from "next/legacy/image";
import { CategoryIcon } from "../Icons/categoryIcon";
import type { ComponentPropsByContents } from "../../types/props/propsType";
import ConvertDate from "../Date/convertDate";
import Link from "next/link";

const PostItem = ({ contents }: ComponentPropsByContents) => {
  const { title, eyecatch, publishDate, categories, slug } = contents;
  return (
    <li className={styles.postItem}>
      <Link href={`/blog/${slug}`}>
        <div className={styles.postItemGrid}>
          <div className={styles.postImgs}>
            <CategoryIcon categoryName={categories.name} />
            <Image
              src={eyecatch.url}
              alt=""
              width={eyecatch.width}
              height={eyecatch.height}
              layout="responsive"
            />
          </div>
          <div className={styles.postExp}>
            <h2>{title}</h2>
            <ConvertDate dateISO={publishDate} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
