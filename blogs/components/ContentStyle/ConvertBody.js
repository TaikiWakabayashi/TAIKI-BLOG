import parse, { domToReact } from "html-react-parser";
import Image from "next/legacy/image";
import { Element } from "html-react-parser";
import hljs from "highlight.js";
import { LinkCard } from "../LinkCard/linkcard";
import styles from "./contentStyle.module.css";

export const ConvertBody = ({ contentHTML, cardDatas }) => {
  const contentReact = parse(contentHTML, {
    replace: (domNode) => {
      const cardLinks = cardDatas.map((data) => data.url);

      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt, width, height } = domNode.attribs;
          return (
            <Image
              layout="responsive"
              src={src}
              width={changeWidth}
              height={changeHeight}
              alt={alt}
              sizes="(max-width: 1200px)"
            />
          );
        } else if (domNode.name === "pre") {
          const code = domNode.children[0].children[0].data; // pre配下のcode(インラインコードは反映しない)
          const highlightCode = hljs.highlightAuto(code); // ハイライトのスタイル
          return (
            <pre>
              <code className="hljs">{parse(highlightCode.value)}</code>
            </pre>
          );
        } else if (
          domNode.name === "a" && //タグがa
          domNode.parent?.children.length === 1 // 親のpタグから見てaタグ以外他の要素がない
        ) {
          const indexOfUrl = cardDatas.findIndex((obj) => {
            return obj.url.indexOf(domNode.attribs?.href) != -1;
          });
          return (
            <LinkCard cardData={cardDatas[indexOfUrl]} className={styles.stack}>
              {domToReact(domNode.children)}
            </LinkCard>
          );
        }
      }
    },
  });
  // console.log(contentReact);
  return <>{contentReact}</>;
};

export default ConvertBody;
