import styles from "./linkCard.module.css";
import Link from "next/link";

const LinkCard = ({ cardData, children }) => {
  //内部リンクか外部リンク化判定
  const blank = cardData.url.indexOf(process.env.SERVICE_DOMAIN) === -1;
  const blankProp = blank
    ? {
        target: "_blank",
        rel: "noopener nofollow",
      }
    : {};
  if (cardData.title) {
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
          <span>{cardData.description && cardData.description}</span>
        </div>
      </div>
    );
  }
  return (
    <Link href={cardData.url} {...blankProp} underline="none">
      {children}
    </Link>
  );
};

export { LinkCard };
