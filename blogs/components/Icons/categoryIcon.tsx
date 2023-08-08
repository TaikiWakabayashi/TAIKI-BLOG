import style from "./icon.module.css";

type propsType = {
  categoryName: string;
};

export const CategoryIcon = ({ categoryName }: propsType) => {
  return <div className={style.categoryIcon}>{categoryName}</div>;
};
