<script src="https://unpkg.com/microcms-js-sdk@latest/dist/umd/microcms-js-sdk.js"></script>;

import { load } from "cheerio";
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// SG
export async function getPostBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log(err);
  }
}

// リンクカード用の情報取得
export const createLinkCardDatas = async (context) => {
  // 対象の投稿のIDを取得
  const id = "qj2miw2od";
  const draftKey = context.previewData?.draftKey;

  // 記事取得
  const contents = await fetch(
    `https://taikiblog.microcms.io/api/v1/blogs/${id}${
      draftKey !== undefined ? `?draftKey=${draftKey}` : ""
    }`,
    { headers: { "X-API-KEY": process.env.API_KEY || "" } }
  ).then((res) => res.json());

  // htmlをパース
  const $ = load(contents.content);

  //aタグのhrefの情報を配列で取得
  const links = $("a")
    .toArray()
    .map((data) => {
      // urlをhttps://~形式に
      const url =
        data.attribs.href.indexOf("http") === -1
          ? `${process.env.SERVICE_DOMAIN}${data.attribs.href}`
          : data.attribs.href;
      return { url: url };
    });

  let cardDatas = [];
  const temps = await Promise.all(
    links.map(async (link) => {
      //fetchでurl先のhtmlデータを取得
      const metas = await fetch(link.url)
        .then((res) => res.text())
        .then((text) => {
          //各サイトのmetaタグの情報をすべてmetasの配列に
          const $ = load(text);
          const metas = $("meta").toArray();
          const metaData = {
            url: link.url,
            title: "",
            description: "",
            image: "",
          };
          //各サイトのmeta情報で、title,description,imageのurlだけ取り出す
          for (let i = 0; i < metas.length; i++) {
            if (metas[i].attribs?.property === "og:title")
              metaData.title = metas[i].attribs.content;
            if (metas[i].attribs?.property === "og:description")
              metaData.description = metas[i].attribs.content;
            if (metas[i].attribs?.property === "og:image")
              metaData.image = metas[i].attribs.content;
          }
          return metaData;
        })
        .catch((e) => {
          console.log(e);
        });
      return metas;
    })
  );
  // 外部に情報を渡せるようにjson形式に整形
  cardDatas = temps.filter((temp) => temp !== undefined);

  return cardDatas;
};

// 全スラッグの取得
export const getAllSlug = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: { fields: "title,slug", orders: "-publishDate", limit: limit },
    });
    return slugs.contents;
  } catch (err) {
    console.log("--- getAllSlugs ---");
    console.log(err);
  }
};

// 全記事データの取得
export const getPosts = async (offset = 0, limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch,publishDate,categories",
        orders: "-publishDate",
        offset: offset,
        limit: limit,
      },
    });
    return posts;
  } catch (err) {
    console.log("--- getAllPosts ---");
    console.log(err);
  }
};

// 個別ページネーション作成用
export const createSinglePagination = async (id) => {
  const posts = await client.get({
    endpoint: "blogs",
    queries: { offset: (id - 1) * 9, limit: 9 },
  });

  return posts;
};

/** ----- 各カテゴリごとのブログ4件を取得するAPI ----- */

// 全てのカテゴリの取得
export const getAllCategories = async () => {
  const categories = await client.get({
    endpoint: "categories",
    queries: { fields: "id,name,slug" },
  });

  return categories;
};

// カテゴリごとのブログを4つずつ取得
export const getBlog = async (categoryId, limit = 100) => {
  const blogs = await client.get({
    endpoint: "blogs",
    queries: {
      filters: `categories[equals]${categoryId}`,
      limit: limit,
      fields: "title,slug,eyecatch,publishDate,categories",
    },
  });

  return blogs;
};

// 作成日が新しい記事を４記事取得
export const getBlogBySortCreateDate = async () => {
  const blogs = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 4,
      fields: "title,slug,eyecatch,publishDate,categories",
      orders: "-createdAt",
    },
  });

  return blogs;
};

// pickupがYesの記事を取得
export const getPickUpBlog = async () => {
  const blogs = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 6,
      fields: "title,slug,eyecatch,publishDate,categories,pickup",
      filters: "pickup[contains]Yes",
    },
  });

  return blogs;
};

// 投稿日を取得
export const getPublishDates = async () => {
  const blogs = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 100,
      fields: "publishDate",
    },
  });

  return blogs;
};

// 投稿日を取得
export const getBlogByPublishDates = async (publishDate) => {
  const blogs = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 100,
      filters: `publishDate[contains]${publishDate}`,
    },
  });

  return blogs;
};
