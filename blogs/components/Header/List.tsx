import Link from "next/link";
import styles from "./header.module.css";
import { SubTitle } from "./SubTitle";
import { useSetRecoilState } from "recoil";
import { toggleState } from "../../context/toggleContext";
import { memo } from "react";
import { headerListProps } from "../../types/props/propsType";

export const List = memo(({ categoryName, upper, link }: headerListProps) => {
  const setToggle = useSetRecoilState(toggleState);

  const closeNav = () => {
    setToggle(false);
  };

  return (
    <li>
      <Link href={link} onClick={closeNav}>
        {categoryName}
        <SubTitle title={upper} />
      </Link>
    </li>
  );
});
