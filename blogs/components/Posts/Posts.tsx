import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./posts.module.css";
import ConvertDate from "../Date/convertDate";
import { CategoryIcon } from "../Icons/categoryIcon";

type argumentType = {
  title: string;
  slug: string;
  eyecatch: any;
  publishDate: any;
  categories: any;
};

export const Posts = ({ posts }: any) => {
  return (
    <div className={styles.postWrapper}>
      {posts.map(
        ({ title, slug, eyecatch, publishDate, categories }: argumentType) => {
          return (
            <article key={slug} className={styles.itemWrapper}>
              <CategoryIcon categoryName={categories.name} />
              <div className={styles.imgArea}>
                <Link href={`/blog/${slug}`}>
                  <Image
                    src={eyecatch.url}
                    alt=""
                    layout="responsive"
                    width={eyecatch.width}
                    height={eyecatch.height}
                    sizes="(max-width: 400px)"
                    className={styles.link}
                  />
                </Link>
              </div>
              <div className={styles.descArea}>
                <Link href={`/blog/${slug}`}>
                  <h2 className={styles.title}>{title}</h2>
                  <ConvertDate dateISO={publishDate} />
                </Link>
              </div>
            </article>
          );
        }
      )}
    </div>
  );
};
