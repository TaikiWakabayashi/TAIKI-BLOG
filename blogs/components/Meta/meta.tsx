import Head from "next/head";

type propsType = {
  pageTitle: string;
};

export const Meta = ({ pageTitle }: propsType) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
    </Head>
  );
};
