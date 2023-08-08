import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Top from "../components/Top/top";
import NewPost from "../components/NewPost/NewPost";
import PickUp from "../components/PickUp/pickup";
import Category from "../components/Category/category";
import Footer from "../components/Footer/footer";
import useHeaderScroll from "../hooks/useHeaderScroll";
import {
  getAllCategories,
  getBlog,
  getBlogBySortCreateDate,
  getPickUpBlog,
} from "../lib/api";
import type {
  getStaticPropsResponseArray,
  categories,
  blogObject,
  blogApiResponseType,
} from "../types/props/propsType";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  blogsStates,
  newPostStates,
  pickupStates,
} from "../context/blogContext";
import { Meta } from "../components/Meta/meta";

const Home: NextPage = ({ blogs, newPosts, pickupPosts }: any) => {
  const isHeaderActive: boolean = useHeaderScroll(300);

  const [blogState, setBlogState] = useRecoilState(blogsStates);
  const setNewPostState = useSetRecoilState(newPostStates);
  const setPickUpState = useSetRecoilState(pickupStates);

  useEffect(() => {
    const blogObj = { value: blogs };
    setBlogState(blogObj);
    setNewPostState(newPosts);
    setPickUpState(pickupPosts);
  }, []);

  return (
    <>
      <Meta pageTitle="HOME" pageDesc="お金と転職のブログ" />
      <Header isActive={isHeaderActive} />
      <Top />
      <NewPost />
      <PickUp />
      {blogState.value.map(({ category }: blogObject, index: number) => {
        return <Category categoryName={category} index={index} key={index} />;
      })}
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  // 全カテゴリを取得
  const categories = await getAllCategories();

  // 最新記事（作成日）を４記事取得
  const newPosts: blogApiResponseType = await getBlogBySortCreateDate();

  // カテゴリIDのリスト作成
  const IdArray: string[] = categories.contents.map(({ id }: categories) => {
    return id;
  });
  // カテゴリ名のリスト作成
  const categoryNameArray: string[] = categories.contents.map(
    ({ name }: categories) => {
      return name;
    }
  );

  // 各カテゴリの記事を4件取得し、配列に格納
  const contentsArray: getStaticPropsResponseArray = [];
  for (let id of IdArray) {
    const blogs = await getBlog(id);
    contentsArray.push(blogs);
  }

  const objArray: blogObject[] = [];

  // カテゴリ名とカテゴリに該当する４記事を格納した配列を持つオブジェクトを作成し、配列に格納
  contentsArray.forEach(({ contents }) => {
    for (let category of categoryNameArray) {
      if (contents[0].categories.name == category) {
        const newObj = { category, blogs: contents };
        objArray.push(newObj);
      }
    }
  });

  // pickupが"Yes"の記事を取得
  const pickupArray: blogApiResponseType = await getPickUpBlog();

  return {
    props: {
      blogs: objArray,
      newPosts: newPosts.contents,
      pickupPosts: pickupArray.contents,
    },
  };
};
