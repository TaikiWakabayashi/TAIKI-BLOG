import { getPostBySlug, getAllSlug } from "../../lib/api";
import MainContainer from "../../components/Container/main-container";
import type { props } from "../../types/props/propsType";
import PostHeader from "../../components/Header/PostHeader";
import { PostBody } from "../../components/ContentStyle/PostBody";
import ConvertBody from "../../components/ContentStyle/ConvertBody";
import "highlight.js/styles/hybrid.css";
import { createLinkCardDatas } from "../../lib/api";
import Footer from "../../components/Footer/footer";
import { ColumnMain } from "../../components/Body/columnMain";
import { EyeCatch } from "../../components/Image/eyeCatch";
import { CategoryIcon } from "../../components/Icons/categoryIcon";
import { Meta } from "../../components/Meta/meta";
import { extractText } from "../../lib/extract-text";

const Post = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  cardDatas,
  description,
}: props) => {
  const bYellow = {
    backgroundColor: "#f0eb45",
  };
  const p = {
    padding: "50px 0 80px 0",
  };

  return (
    <div style={bYellow}>
      <Meta pageTitle={title} pageDesc={title} />
      <MainContainer>
        <article style={p}>
          <ColumnMain>
            <CategoryIcon categoryName={categories.name} />
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

export default Post;

export const getStaticPaths = async () => {
  // 全スラッグの取得
  const allSlugs = await getAllSlug();

  const paths = allSlugs.map(({ slug }: any) => {
    return `/blog/${slug}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const slug = context.params.slug;

  console.log("--- context ---");
  console.log(context);

  // スラッグごとの記事データの取得
  const post = await getPostBySlug(slug);
  console.log("--- post ---");
  console.log(post);

  // リンクカードを作成するデータを取得
  const cardDatas = await createLinkCardDatas(context, post.id);
  console.log("--- cardDatas ---");
  console.log(cardDatas);

  // Meta情報の取得
  const description = extractText(post.content);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
      cardDatas,
      description,
    },
  };
};
