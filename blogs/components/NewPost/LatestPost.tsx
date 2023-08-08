import styles from "./newpost.module.css";
import Image from "next/legacy/image";
import { NewIcon } from "../Icons/NewIcon";
import ConvertDate from "../Date/convertDate";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { newPostStates } from "../../context/blogContext";

const LatestPost = () => {
  const newPostState = useRecoilValue(newPostStates);

  return (
    <>
      {newPostState.map(({ slug, eyecatch, title, publishDate }, index) => {
        if (index == 0) {
          return (
            <div className={styles.latestPost} key={index}>
              <div className={styles.pickupPostCard}>
                <NewIcon />
                <div className={styles.pickupItem}>
                  <Link href={`/blog/${slug}`}>
                    <div className={styles.pickupImg}>
                      <Image
                        src={eyecatch.url}
                        alt=""
                        width={eyecatch.width}
                        height={eyecatch.height}
                        layout="responsive"
                      />
                    </div>
                    <h2>{title}</h2>
                    <p>説明</p>
                    <ConvertDate dateISO={publishDate} />
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default LatestPost;
