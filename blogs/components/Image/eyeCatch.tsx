import Image from "next/legacy/image";
import styles from "./images.module.css";

type propsType = {
  eyecatch: any;
};

export const EyeCatch = ({ eyecatch }: propsType) => {
  return (
    <figure className={styles.eyecatchWrapper}>
      <Image
        src={eyecatch.url}
        alt=""
        width={eyecatch.width}
        height={eyecatch.height}
        layout="responsive"
        priority
      />
    </figure>
  );
};
