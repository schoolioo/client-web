import React, { FunctionComponent, ReactNode } from "react";
import { TextBlock } from "../../url-generated-api";
import { InlineMathBlock } from "../MathBlock/MathBlock";

export type TextBlockComponentProps = {
  content: TextBlock["content"];
  editable?: boolean;
};

export const SpanBold: FunctionComponent = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};

export const SpanItalic: FunctionComponent = ({ children }) => {
  return <span className="italic">{children}</span>;
};

export const TextBlockComponent: FunctionComponent<TextBlockComponentProps> = ({
  content,
  editable = false,
}) => {
  function markdownIFy(text: string): ReactNode {
    // replace **text** with <span>text<span/> and place it into a ReactNode

    return regexToElement(/\*\*(.+?)\*\*/g, SpanBold, text, (text1) =>
      regexToElement(/\*(.+?)\*/g, SpanItalic, text1, (text2) =>
        regexToElement(/\$\$(.+?)\$\$/g, InlineMathBlock, text2)
      )
    );
  }

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
        result = [
          ...result,
          React.createElement(Element, {}, callBack(data[i])),
        ];
      }
    }
    return result;
  }

  return (
    <div
      className={" whitespace-pre-wrap select-text min-h-[1.5em]"}
      contentEditable={editable}
      placeholder="Tapez"
    >
      {markdownIFy(content)}
    </div>
  );
};
