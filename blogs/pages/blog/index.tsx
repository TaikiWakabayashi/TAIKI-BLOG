import { getPosts } from "../../lib/api";
import MainContainer from "../../components/Container/main-container";
import Header from "../../components/Header/Header";
import useHeaderScroll from "../../hooks/useHeaderScroll";
import { Posts } from "../../components/Posts/Posts";
import { PageTitle } from "../../components/Title/pageTitle";
import { Pagination } from "../../components/Pagination/pagination";
import { Meta } from "../../components/Meta/meta";

export default function Blog({ posts, totalCount }: any) {
  const isHeaderActive = useHeaderScroll(300);

  return (
    <>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Header isActive={isHeaderActive} />
      <MainContainer>
        <PageTitle title="記事一覧" />
        <Posts posts={posts} />
        <Pagination totalCount={totalCount} />
      </MainContainer>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts(0, 9);

  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  };
};
