import React, { FunctionComponent, ReactNode, useRef, useState } from "react";
import { TextBlock } from "../../url-generated-api";
import { InlineMathBlock } from "../MathBlock/MathBlock";

export const SpanBold: FunctionComponent = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};

export const SpanItalic: FunctionComponent = ({ children }) => {
  return <span className="italic">{children}</span>;
};

function regexToElement(
  regex: RegExp,
  Element: any,
  text: string,
  callBack: (text: string) => ReactNode = (text) => text
): ReactNode {
  const data = text.split(regex);
  let result: ReactNode[] = [];

  for (let i = 0; i < data.length; i++) {
    if (i % 2 == 0) {
      result = [...result, <span>{callBack(data[i])}</span>];
    } else {
      result = [...result, React.createElement(Element, {}, callBack(data[i]))];
    }
  }
  return result;
}

function markdownIFy(text: string): ReactNode {
  // replace **text** with <span>text<span/> and place it into a ReactNode

  return regexToElement(/\*\*(.+?)\*\*/g, SpanBold, text, (text1) =>
    regexToElement(/\*(.+?)\*/g, SpanItalic, text1, (text2) =>
      regexToElement(/\$\$(.+?)\$\$/g, InlineMathBlock, text2)
    )
  );
}

export type TextBlockComponentProps = {
  readonly content: TextBlock["content"];
  readonly editable?: boolean;
};
export const TextBlockComponent: FunctionComponent<TextBlockComponentProps> = ({
  content,
  editable,
}) => {
  const [isCurrentlyEdited, setIsCurrentlyEdited] = useState(false);

  const [textContent, setTextContent] = useState(content);

  const refContainer = useRef<HTMLDivElement>(null);

  return isCurrentlyEdited ? (
    <input
      onChange={(event) => setTextContent(event.target.value)}
      autoFocus
      onBlur={() => setIsCurrentlyEdited(false)}
      type="text"
      value={textContent}
      className="bg-transparent w-full outline-none focus:border-b border-black/50"
    />
  ) : (
    <div
      className={editable ? "cursor-text" : ""}
      onClick={() => {
        if (editable) {
          setIsCurrentlyEdited(true);
        }
      }}
    >
      {markdownIFy(textContent)}
    </div>
  );

  // <div
  //   contentEditable={editable}
  //   className={ " whitespace-pre-wrap select-text min-h-[1.5em]" }
  //   onInput={ () => {
  //     setTextContent(refContainer.current?.textContent ?? "")
  //   } }
  //   onBlur={ () => {
  //     setIsCurrentlyEdited(false);
  //   } }
  //   ref={ refContainer }
  //   onFocus={ () => setIsCurrentlyEdited(true) }
  // >
  //   { editable && isCurrentlyEdited ? textContent : markdownIFy(textContent) }
  // </div>
};
