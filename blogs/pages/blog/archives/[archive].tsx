import { format, parseISO } from "date-fns";
import { getBlogByPublishDates, getPublishDates } from "../../../lib/api";
import {
  blogApiResponseType,
  publishDateApiResponse,
  archiveProps,
} from "../../../types/props/propsType";
import ja from "date-fns/locale/ja";
import { Meta } from "../../../components/Meta/meta";
import MainContainer from "../../../components/Container/main-container";
import { PageTitle } from "../../../components/Title/pageTitle";
import { Posts } from "../../../components/Posts/Posts";

const Archive = ({ posts }: archiveProps) => {
  console.log(posts);
  const { date, blogs, count } = posts;
  return (
    <>
      <Meta pageTitle="アーカイブ" pageDesc="アーカイブ一覧" />
      <MainContainer>
        <PageTitle title="アーカイブ" />
        <h3>{date}</h3>
        <Posts posts={blogs} />
      </MainContainer>
    </>
  );
};

export default Archive;

export const getStaticPaths = async () => {
  // 全ブログの投稿日を取得
  const publishDates: publishDateApiResponse = await getPublishDates();

  // 投稿日を変換
  const convertDates: string[] = [];
  publishDates.contents.forEach(({ publishDate }) => {
    const date: string = format(parseISO(publishDate), "yyyy年MM月", {
      locale: ja,
    });
    if (!convertDates.includes(date)) {
      convertDates.push(date);
    }
  });

  // パスを作成
  const paths = convertDates.map((publishDate: string) => {
    return `/blog/archives/${publishDate}`;
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const convertDate = context.params.archive
    .replace("年", "-")
    .replace("月", "");

  const blogs: blogApiResponseType = await getBlogByPublishDates(convertDate);

  const response = {
    date: context.params.archive,
    blogs: blogs.contents,
    count: blogs.contents.length,
  };

  return {
    props: {
      posts: response,
    },
  };
};
