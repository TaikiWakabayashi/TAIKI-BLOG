import { Html, Head, Main, NextScript } from "next/document";
import { siteMeta } from "../lib/constants";

const { siteLang } = siteMeta;

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Sawarabi+Gothic&display=swap"
          rel="preload"
          as="style"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Sawarabi+Gothic&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
