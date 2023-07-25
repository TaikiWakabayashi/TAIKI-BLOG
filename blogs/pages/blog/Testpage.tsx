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
import type { GetStaticProps } from "next";
import { Props, Params } from "../../types/props/propsType";
import Footer from "../../components/Footer/footer";

const TestPage = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  cardDatas,
}: props) => {
  const isHeaderActive = useHeaderScroll(300);

  const styles = {
    margin: "0px",
    width: "100%",
  };

  return (
    <>
      <Header isActive={isHeaderActive} />
      <MainContainer>
        <article>
          <PostHeader title={title} subTitle="Blog Article" publish={publish} />

          <figure style={styles}>
            <Image
              src={eyecatch.url}
              alt=""
              width={eyecatch.width}
              height={eyecatch.height}
              layout="responsive"
              sizes="(max-width: 800px)"
              priority
            />
          </figure>
        </article>
        <PostBody>
          <ConvertBody contentHTML={content} cardDatas={cardDatas} />
        </PostBody>
      </MainContainer>
      <Footer />
    </>
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
