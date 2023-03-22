import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Top from "../components/Top/top";
import NewPost from "../components/NewPost/NewPost";
import PickUp from "../components/PickUp/pickup";
import Category from "../components/Category/category";
import Footer from "../components/Footer/footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Top />
      <NewPost />
      <PickUp />
      <Category />
      <Footer />
    </>
  );
};

export default Home;
