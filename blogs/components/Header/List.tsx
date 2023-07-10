import Link from "next/link";
import styles from "./header.module.css";
import { useToggleContext } from "./Header";
import { SubTitle } from "./SubTitle";

type props = {
  categoryName: string;
  upper: string;
};

export const List = ({ categoryName, upper }: props) => {
  const { toggle, setToggle } = useToggleContext();

  const closeNav = () => {
    setToggle(false);
  };

  return (
    <li>
      <Link href="#" onClick={closeNav}>
        {categoryName}
        <SubTitle title={upper} />
      </Link>
    </li>
  );
};
