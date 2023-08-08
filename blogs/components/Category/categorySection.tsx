import CCard from "./cCard";
import styles from "./category.module.css";
import { useRecoilValue } from "recoil";
import { blogsStates } from "../../context/blogContext";
import type { categoryPageComponentProps } from "../../types/props/propsType";

const CategorySection = ({
  categoryName,
}: Pick<categoryPageComponentProps, "categoryName">) => {
  const blogState = useRecoilValue(blogsStates);

  const extractCategoryBlogs = blogState.value.filter((blog) => {
    return blog.category === categoryName;
  });
  return (
    <>
      <div className={styles.categoryWrapper}>
        {extractCategoryBlogs[0].blogs.map(
          ({ title, publishDate, eyecatch, slug }, index) => {
            return (
              <CCard
                key={index}
                title={title}
                publishDate={publishDate}
                eyecatch={eyecatch}
                slug={slug}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default CategorySection;
