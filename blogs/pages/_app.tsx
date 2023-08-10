import "../styles/globals.css";
import "../styles/footer.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "../components/Header/Header";
import useHeaderScroll from "../hooks/useHeaderScroll";

function MyApp({ Component, pageProps }: AppProps) {
  const isHeaderActive = useHeaderScroll(300);
  return (
    <RecoilRoot>
      <Header isActive={isHeaderActive} />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
