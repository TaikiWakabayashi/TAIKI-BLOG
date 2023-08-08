import styles from "./pickup.module.css";
import Image from "next/legacy/image";
import { CategoryIcon } from "../Icons/categoryIcon";
import { useRecoilValue } from "recoil";
import { pickupStates } from "../../context/blogContext";
import Link from "next/link";
import ConvertDate from "../Date/convertDate";

const PickupItem = () => {
  const pickupState = useRecoilValue(pickupStates);
  return (
    <>
      {pickupState.map(
        ({ slug, categories, eyecatch, title, publishDate }, index) => {
          return (
            <div className={styles.pickupCard} key={index}>
              <div className={styles.cardWrapper}>
                <Link href={`blog/${slug}`}>
                  <div className={styles.eyecatch}>
                    <CategoryIcon categoryName={categories.name} />
                    <Image
                      src={eyecatch.url}
                      alt=""
                      width={eyecatch.width}
                      height={eyecatch.height}
                      layout="responsive"
                    />
                  </div>
                  <h2>{title}</h2>
                  <ConvertDate dateISO={publishDate} />
                </Link>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default PickupItem;
