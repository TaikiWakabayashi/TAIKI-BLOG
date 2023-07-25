import type { NextPage } from "next";
import Header from "../components/Header/Header";
import Top from "../components/Top/top";
import NewPost from "../components/NewPost/NewPost";
import PickUp from "../components/PickUp/pickup";
import Category from "../components/Category/category";
import Footer from "../components/Footer/footer";
import useHeaderScroll from "../hooks/useHeaderScroll";
import { useEffect } from "react";
import { getPostBySlug } from "../lib/api";
import type { props } from "../types/props/propsType";

const Home: NextPage = () => {
  const isHeaderActive = useHeaderScroll(300);

  return (
    <>
      <Header isActive={isHeaderActive} />
      <Top />
      <NewPost />
      <PickUp />
      <Category title="転職" subTitle="JOB TITLE" index={1} />
      <Category title="プログラミング" subTitle="PROGRAMMING" index={2} />
      <Category title="エンジニア" subTitle="ENGiNEER" index={3} />
      <Category title="プライベート" subTitle="PRIVATE" index={4} />
      <Footer />
    </>
  );
};

export default Home;
