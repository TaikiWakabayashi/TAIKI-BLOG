import { ParsedUrlQuery } from "node:querystring";

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
};

export type Props = {
  props: any;
};

export interface Params extends ParsedUrlQuery {}
