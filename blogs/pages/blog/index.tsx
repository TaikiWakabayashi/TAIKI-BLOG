type props = {
  title: string;
  subTitle: string;
  imageOn: boolean;
};

export const Blog = ({ title, subTitle, imageOn = false }: props) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </>
  );
};
