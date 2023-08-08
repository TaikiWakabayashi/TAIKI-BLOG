import Link from "next/link";
import { Pagination } from "../../../components/Pagination/pagination";
import { createSinglePagination } from "../../../lib/api";
import { client } from "../../../lib/api";
import { Posts } from "../../../components/Posts/Posts";
import Header from "../../../components/Header/Header";
import MainContainer from "../../../components/Container/main-container";
import { PageTitle } from "../../../components/Title/pageTitle";
import useHeaderScroll from "../../../hooks/useHeaderScroll";
import React from "react";

const PER_PAGE = 9;

const BlogPageId = React.memo(({ posts, totalCount }: any) => {
  const isHeaderActive = useHeaderScroll(300);
  return (
    <>
      <Header isActive={isHeaderActive} />
      <MainContainer>
        <PageTitle title="記事一覧" />
        <Posts posts={posts} />
        <Pagination totalCount={totalCount} />
      </MainContainer>
    </>
  );
});

export default BlogPageId;

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blogs" });

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(2, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/blog/page/${repo}`
  );

  return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const posts = await createSinglePagination(id);

  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  };
};
