import { atom } from "recoil";
import type { blogObject, contentsType } from "../types/props/propsType";

export const blogsStates = atom({
  key: "blogState",
  default: { value: [] as blogObject[] },
});

export const newPostStates = atom({
  key: "newPostStates",
  default: [] as contentsType[],
});

export const pickupStates = atom({
  key: "pickupStates",
  default: [] as contentsType[],
});
