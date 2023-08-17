import styles from "./linkCard.module.css";
import Link from "next/link";
import { LinkCardDescription } from "./linkCardDescription";

const LinkCard = ({ cardData, children }) => {
  //内部リンクか外部リンク化判定
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
            <img src={cardData.image} alt="" />
          </Link>
        </div>
        <div className={styles.desc}>
          <p>
            <Link href={cardData.url} {...blankProp}>
              {cardData.title && cardData.title}
            </Link>
          </p>
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
