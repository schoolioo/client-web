import React, { FunctionComponent } from "react";
import katex from "katex";
import "katex/dist/katex.css";

export type MathBlockProps = {
  latex: string;
  inline?: boolean;
  align?: "left" | "center" | "right";
};

const MathBlock: FunctionComponent<MathBlockProps> = ({
  latex = "",
  inline = false,
  align = "center",
}) => {
  const html = katex.renderToString(latex, { throwOnError: false });

  const getAlignment = () => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <div
      className={(inline ? "inline " : "") + getAlignment()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MathBlock;


export type InlineMathBlockProps = {
  children: string
};
export const InlineMathBlock: FunctionComponent<InlineMathBlockProps> = ({children}) => {
  return (
    <MathBlock inline latex={children}/>
  );
};

