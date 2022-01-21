import React, { FunctionComponent } from 'react';
import { TextBlock, Text } from "../../url-generated-api";
import MathBlock from "../MathBlock/MathBlock";

export type TextBlockComponentProps = {
  content: TextBlock["content"]
};
export const TextBlockComponent: FunctionComponent<TextBlockComponentProps> = ({ content }) => {
  return (
    <div className="select-text">
      {content.map(value => {
        if (value.isMath) {
          return <MathBlock latex={ value.text } inline/>
        } else {
          return <SimpleText { ...value }/>
        }
      })}
    </div>
  );
};

const SimpleText: FunctionComponent<Text> = ({ isBold, isItalic, isUnderlined, text }) => {
  return <span className={`${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderlined ? "underline" : ""}`}>{text}</span>
}
