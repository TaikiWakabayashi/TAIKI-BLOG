import Head from "next/head";
import { siteMeta } from "../../lib/constants";
import { MetaComponentProps } from "../../types/props/propsType";
import { useRouter } from "next/router";
import opgImg from "../../images/waka-blog.webp";

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } =
  siteMeta;

export const Meta = ({ pageTitle, pageDesc }: MetaComponentProps) => {
  // ページのタイトル
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  // ページの説明
  const desc = pageDesc ?? siteDesc;
  // ページのURL
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  // OPG画像
  const img = opgImg.src;
  const width = opgImg.width.toString();
  const height = opgImg.height.toString();
  const imgUrl = img.startsWith("https") ? img : `${siteUrl}${img}`;
  console.log("--- igmUrl ---");
  console.log(imgUrl);
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <link rel="cacnonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:type" content={siteType} />
      <meta property="og:locale" content={siteLocale} />
      <link rel="icon" href={siteIcon} />
      <link rel="apple-touch-icon" href={siteIcon} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
      <meta property="og:twitter:card" content="summary_large_image" />
    </Head>
  );
};
