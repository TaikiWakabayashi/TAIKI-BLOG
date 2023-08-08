import { ReactNode } from "react";

export type props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: any;
  categories: any;
  cardDatas:
    | void
    | {
        url: string;
        title: string;
        description: string;
        image: string;
      }[];
  description: string;
};

export type Props = {
  props: any;
};

export type childrenProps = {
  children: ReactNode;
};

export type headerProps = {
  isActive: boolean;
};

export type eyeCatch = {
  url: string;
  height: number;
  width: number;
};

export type categories = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
};

export type contentsType = {
  title: string;
  slug: string;
  eyecatch: eyeCatch;
  publishDate: string;
  categories: categories;
  pickup: string[];
};

export type blogApiResponseType = {
  contents: contentsType[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type getStaticPropsResponseArray = blogApiResponseType[];

export type blogObject = {
  category: string;
  blogs: contentsType[];
};

export type categoryPageComponentProps = {
  categoryName: string;
  index: number;
};

export type headerListProps = {
  categoryName: string;
  upper: string;
  link: string;
};

export type ComponentPropsByContents = {
  contents: contentsType;
};
