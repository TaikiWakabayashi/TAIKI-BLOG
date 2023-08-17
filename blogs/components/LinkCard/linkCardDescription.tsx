type props = {
  description: string;
};

export const LinkCardDescription = ({ description }: props) => {
  const descLength = description.length;
  let newDesc = "";
  const OMIT = "...";
  if (descLength > 15) {
    const newDescArray = description.split("。", 1);
    newDesc = newDescArray[0] + OMIT;
    console.log(newDesc);
  }

  return <span>{newDesc}</span>;
};
