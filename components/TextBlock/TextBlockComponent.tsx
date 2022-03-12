import React, { FunctionComponent, ReactNode, useState } from "react";
import { Block, TextBlock } from "../../url-generated-api";
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
      result = [...result, <span key={`${i}${data[i]}`}>{callBack(data[i])}</span>];
    } else {
      result = [...result, React.createElement(Element, {key: `${i}${data[i]}`}, callBack(data[i]))];
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
  readonly onUpdate?: (block: Block) => void;
  readonly id: string;
};
export const TextBlockComponent: FunctionComponent<TextBlockComponentProps> = ({
  content,
  editable,
  onUpdate = () => {},
  id,
}) => {
  const [isCurrentlyEdited, setIsCurrentlyEdited] = useState(false);

  const [textContent, setTextContent] = useState(content);

  const updateContent = (content: string) => {
    setTextContent(content);
    onUpdate({
      __typename: "TextBlock",
      id,
      content,
    });
  };

  return isCurrentlyEdited ? (
    <input
      onChange={(event) => updateContent(event.target.value)}
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
};
