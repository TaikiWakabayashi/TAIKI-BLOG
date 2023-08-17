import styles from "./linkCard.module.css";
import Link from "next/link";
import { LinkCardDescription } from "./linkCardDescription";
import Image from "next/legacy/image";

const LinkCard = ({ cardData, children }) => {
  //内部リンクか外部リンク化判定
  console.log("--- cardDta ---");
  console.log(cardData);
  let blank = false;
  if (cardData != null || cardData != undefined) {
    blank = cardData.url.indexOf(process.env.SERVICE_DOMAIN) === -1;
  } else {
    blank = false;
  }
  const blankProp = blank
    ? {
        target: "_blank",
        rel: "noopener nofollow",
      }
    : {};
  if (cardData != null || cardData != undefined) {
    return (
      <div className={styles.linkCardWrapper}>
        <div className={styles.images}>
          <Link href={cardData.url} {...blankProp}>
            <Image
              src={cardData.image}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Link>
        </div>
        <div className={styles.desc}>
          <Link href={cardData.url} {...blankProp}>
            {cardData.title && cardData.title}
          </Link>

          {cardData.description && (
            <LinkCardDescription description={cardData.description} />
          )}
        </div>
      </div>
    );
  }
  return (
    <Link href={cardData.url} {...blankProp} underline="none">
      {children}
    </Link>
    // <p>Hello</p>
  );
};

export { LinkCard };
