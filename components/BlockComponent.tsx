import React, { FunctionComponent, useState } from "react";
import { Block } from "../url-generated-api";
import CourseBlock, { CourseBlockType } from "./CourseBlock/CourseBlock";
import { TextBlockComponent } from "./TextBlock/TextBlockComponent";
import Heading from "./Heading/Heading";
import { AddBlockButton } from "./AddBlockButton";

const GetBlock: FunctionComponent<{ block: Block; level: number }> = ({
  children,
  block,
  level = 0,
}) => {
  switch (block.__typename) {
    case "SectionBlock":
      return (
        <section className="ml-4 border-l border-primary border-l-4 pl-4">
          <Heading level={level} title={block.title} prefix="A" />
          {children}
        </section>
      );
    case "TheoremBlock":
      return (
        <CourseBlock type={CourseBlockType.Theorem}>{children}</CourseBlock>
      );
    case "ExempleBlock":
      return (
        <CourseBlock type={CourseBlockType.Example}>{children}</CourseBlock>
      );
    case "DefinitionBlock":
      return (
        <CourseBlock type={CourseBlockType.Definition}>{children}</CourseBlock>
      );
    case "CommentBlock":
      return (
        <CourseBlock type={CourseBlockType.Comment}>{children}</CourseBlock>
      );
    case "TextBlock":
      return <TextBlockComponent editable content={block.content} />;
    default:
      return <>{children}</>;
  }
};

export type BlockComponentProps = {
  block: Block;
  level: number;
};
export const BlockComponent: FunctionComponent<BlockComponentProps> = ({
  block,
  level,
}) => {
  const addNewElementBelow = (
    elementType: Block["__typename"],
    index: number
  ) => {
    let newBlock: Block;
    switch (elementType) {
      case "ExempleBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "ExempleBlock",
        };
        break;
      case "SectionBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          title: "Nouveau titre",
          __typename: "SectionBlock",
        };
        break;
      case "TextBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          content: "😁 Votre texte ici...",
          __typename: "TextBlock",
        };
        break;
      case "TheoremBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "TheoremBlock",
        };
        break;
      case "DefinitionBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "DefinitionBlock",
        };
        break;
      case "CommentBlock":
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "CommentBlock",
        };
        break;
      default:
        newBlock = {
          id: Math.random().toFixed(10),
          blocks: [],
          __typename: "ExempleBlock",
        };
        break;
    }

    // add newBlock at index in blockChildren
    const newBlockChildren = [...blockChildren];
    newBlockChildren.splice(index + 1, 0, newBlock);
    setBlockChildren(newBlockChildren);
  };

  // @ts-ignore
  const [blockChildren, setBlockChildren] = useState<Block[]>(
    block.blocks ?? []
  );

  return (
    <>
      <GetBlock level={level} block={block}>
        <section>
          {blockChildren.map((blockChild, index) => (
            <>
              <AddBlockButton
                onClick={(elementType: Block["__typename"]) =>
                  addNewElementBelow(elementType, index - 1)
                }
              />
              <BlockComponent
                level={level + 1}
                key={blockChild.id}
                block={blockChild}
              />

            </>
          ))}
        </section>
        <AddBlockButton
          onClick={(elementType: Block["__typename"]) =>
            addNewElementBelow(elementType, blockChildren.length + 1)
          }
        />
      </GetBlock>
    </>
  );
};

// function to generate UUID
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
