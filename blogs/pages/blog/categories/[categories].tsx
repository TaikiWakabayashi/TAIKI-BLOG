import { title } from "process";
import MainContainer from "../../../components/Container/main-container";
import { Meta } from "../../../components/Meta/meta";
import { PageTitle } from "../../../components/Title/pageTitle";
import { getAllCategories, getBlog } from "../../../lib/api";
import type {
  blogApiResponseType,
  categories,
  contentsType,
  categoriesProps,
} from "../../../types/props/propsType";
import { Posts } from "../../../components/Posts/Posts";
import { memo } from "react";
import { Pagination } from "../../../components/Pagination/pagination";

const Categories = memo(({ posts, totalCount }: categoriesProps) => {
  return (
    <>
      <Meta pageTitle="カテゴリ一覧" pageDesc="カテゴリ記事一覧" />
      <MainContainer>
        <PageTitle title="カテゴリ一覧" />
        <Posts posts={posts} />
        <Pagination totalCount={totalCount} />
      </MainContainer>
    </>
  );
});

export default Categories;

export const getStaticPaths = async () => {
  // 全カテゴリの取得
  const categories = await getAllCategories();

  // カテゴリのIDリストを作成
  const categoryIdArray: string[] = categories.contents.map(
    ({ id }: categories) => {
      return id;
    }
  );

  const paths = categoryIdArray.map((id) => {
    return `/blog/categories/${id}`;
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const blogs: blogApiResponseType = await getBlog(context.params.categories);

  return {
    props: {
      posts: blogs.contents,
      totalCount: blogs.totalCount,
    },
  };
};
