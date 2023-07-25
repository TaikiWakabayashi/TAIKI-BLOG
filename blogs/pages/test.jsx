import { getPostBySlug } from "../lib/api";
// import type { props } from "../types/props/propsType";
import ConvertBody from "../components/ContentStyle/ConvertBody";
import { useEffect } from "react";
import Link from "next/link";
import { Meta } from "../components/Meta/meta";
import { load } from "cheerio";
import { PostBody } from "../components/ContentStyle/PostBody";
import MainContainer from "../components/Container/main-container";
import Footer from "../components/Footer/footer";
import { createLinkCardDatas } from "../lib/api";

export const Test = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  cardDatas,
}) => {
  useEffect(() => {
    console.log("uselayoutEffect実行");
    if (window && window.iframely) {
      console.log("window.iframely実行");
      window.iframely.load();
    }
  });
  return (
    <>
      <Meta pageTitle="テスト" />
      <MainContainer>
        <PostBody>
          <ConvertBody contentHTML={content} cardDatas={cardDatas} />
        </PostBody>
      </MainContainer>
      <Footer />
    </>
  );
};

export async function getStaticProps(context) {
  const slug = "technology";
  // 特定のslugのきぎを取得
  const post = await getPostBySlug(slug);

  // リンクカードを作成するデータを取得
  const cardDatas = await createLinkCardDatas(context);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      cardDatas: cardDatas,
    },
  };
}

export default Test;
