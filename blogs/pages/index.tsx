import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Top from "../components/Top/top";
import NewPost from "../components/NewPost/NewPost";
import PickUp from "../components/PickUp/pickup";
import Category from "../components/Category/category";
import Footer from "../components/Footer/footer";
import {
  getAllCategories,
  getBlog,
  getBlogBySortCreateDate,
  getPickUpBlog,
  getPublishDates,
} from "../lib/api";
import type {
  getStaticPropsResponseArray,
  categories,
  blogObject,
  blogApiResponseType,
  categoryObjArrayType,
  categoriesApiResponseType,
  publishDateApiResponse,
} from "../types/props/propsType";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  blogsStates,
  newPostStates,
  pickupStates,
  convertDateStates,
} from "../context/blogContext";
import { Meta } from "../components/Meta/meta";
import { format, parseISO } from "date-fns";
import ja from "date-fns/locale/ja";

const Home: NextPage = ({
  blogs,
  newPosts,
  pickupPosts,
  convertDates,
}: any) => {
  const [blogState, setBlogState] = useRecoilState(blogsStates);
  const setNewPostState = useSetRecoilState(newPostStates);
  const setPickUpState = useSetRecoilState(pickupStates);
  const setConvertDateState = useSetRecoilState(convertDateStates);

  useEffect(() => {
    const blogObj = { value: blogs };
    setBlogState(blogObj);
    setNewPostState(newPosts);
    setPickUpState(pickupPosts);
    setConvertDateState(convertDates);
  }, []);

  return (
    <>
      <Meta pageTitle="HOME" pageDesc="お金と転職のブログ" />
      <Top />
      <NewPost />
      <PickUp />
      {blogState.value.map(({ id, category }: blogObject, index: number) => {
        return (
          <Category id={id} categoryName={category} index={index} key={index} />
        );
      })}
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  // 全カテゴリを取得
  const categories: categoriesApiResponseType = await getAllCategories();

  // 最新記事（作成日）を４記事取得
  const newPosts: blogApiResponseType = await getBlogBySortCreateDate();

  // カテゴリIDのリスト作成
  const IdArray: string[] = categories.contents.map(({ id }: categories) => {
    return id;
  });
  // カテゴリ名のリスト作成
  const categoryObjArray: categoryObjArrayType[] = [];
  categories.contents.forEach(({ id, name }) => {
    const newObj = { id, name };
    categoryObjArray.push(newObj);
  });

  // 各カテゴリの記事を4件取得し、配列に格納
  const contentsArray: getStaticPropsResponseArray = [];
  for (let id of IdArray) {
    const blogs = await getBlog(id, 4);
    contentsArray.push(blogs);
  }

  const objArray: blogObject[] = [];

  // カテゴリ名とカテゴリに該当する４記事を格納した配列を持つオブジェクトを作成し、配列に格納
  contentsArray.forEach(({ contents }) => {
    for (let category of categoryObjArray) {
      if (contents[0].categories.name == category.name) {
        const newObj = {
          id: category.id,
          category: category.name,
          blogs: contents,
        };
        objArray.push(newObj);
      }
    }
  });

  // pickupが"Yes"の記事を取得
  const pickupArray: blogApiResponseType = await getPickUpBlog();

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

  return {
    props: {
      blogs: objArray,
      newPosts: newPosts.contents,
      pickupPosts: pickupArray.contents,
      convertDates,
    },
  };
};
