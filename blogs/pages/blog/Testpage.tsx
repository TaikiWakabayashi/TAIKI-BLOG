import { getPostBySlug } from "../../lib/api";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/Container/main-container";
import type { props } from "../../types/props/propsType";
import PostHeader from "../../components/Header/PostHeader";
import useHeaderScroll from "../../hooks/useHeaderScroll";
import Image from "next/legacy/image";
import { PostBody } from "../../components/ContentStyle/PostBody";
import ConvertBody from "../../components/ContentStyle/ConvertBody";
// import "highlight.js/styles/vs2015.css";
import "highlight.js/styles/hybrid.css";
import { createLinkCardDatas } from "../../lib/api";
import Footer from "../../components/Footer/footer";
import { ColumnMain } from "../../components/Body/columnMain";
import { EyeCatch } from "../../components/Image/eyeCatch";

const TestPage = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  cardDatas,
}: props) => {
  const isHeaderActive = useHeaderScroll(300);

  const bYellow = {
    backgroundColor: "#f0eb45",
  };
  const p = {
    padding: "50px 0",
  };

  return (
    <div style={bYellow}>
      <Header isActive={isHeaderActive} />
      <MainContainer>
        <article style={p}>
          <ColumnMain>
            <PostHeader
              title={title}
              subTitle="Blog Article"
              publish={publish}
            />
            <EyeCatch eyecatch={eyecatch} />
            <PostBody>
              <ConvertBody contentHTML={content} cardDatas={cardDatas} />
            </PostBody>
          </ColumnMain>
        </article>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default TestPage;

export async function getStaticProps(context: any) {
  const slug = "technology";

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
