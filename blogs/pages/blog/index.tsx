import { getPosts } from "../../lib/api";
import MainContainer from "../../components/Container/main-container";
import { Posts } from "../../components/Posts/Posts";
import { PageTitle } from "../../components/Title/pageTitle";
import { Pagination } from "../../components/Pagination/pagination";
import { Meta } from "../../components/Meta/meta";

export default function Blog({ posts, totalCount }: any) {
  return (
    <>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
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
