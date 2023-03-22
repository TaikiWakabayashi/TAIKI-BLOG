import styles from "./footer.module.css";
import Profile from "./Profile";
import Archive from "./archive";
import { Category } from "./category";

type propsType = {
  title?: string;
  _className: any;
};

const FooterItem = ({ _className, title }: propsType) => {
  return (
    <div className={`${styles.footerItem} ${_className}`}>
      {_className === "profile" ? (
        <Profile />
      ) : (
        <div className={styles.itemArea}>
          <h1>{title}</h1>
          {_className === "archives" ? <Archive /> : <Category />}
        </div>
      )}
    </div>
  );
};

export default FooterItem;
