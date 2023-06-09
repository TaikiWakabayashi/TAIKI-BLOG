import styles from "./footer.module.css";
import MainContainer from "../Container/main-container";
import FooterItem from "./footerItem";

const Footer = () => {
  const domObj = [
    {
      _className: "profile",
    },
    {
      _className: "archives",
      title: "アーカイブ",
    },
    {
      _className: "categoriesList",
      title: "カテゴリー",
    },
  ];
  return (
    <footer className={styles.footer}>
      <MainContainer>
        <div className={styles.footerWrapper}>
          {domObj.map((arr) => {
            return (
              <FooterItem
                key={arr._className}
                _className={arr._className}
                title={arr.title}
              />
            );
          })}
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;
